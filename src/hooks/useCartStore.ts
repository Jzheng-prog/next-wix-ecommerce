import { create } from "zustand";
import { currentCart } from "@wix/ecom";
import { WixClient } from "@/context/wixContext";

type CartState = {
  cart: ExtendedCart | null;
  isLoading: boolean;
  counter: number;
  getCart: (wixClient: WixClient) => Promise<void>;
  addItem: (
    wixClient: WixClient,
    productId: string,
    quantity: number,
    variantId?: string,
  ) => Promise<void>;
  removeItem: (wixClient: WixClient, itemId: string) => Promise<void>;
  updateItemQuantity: (wixClient:WixClient, itemId:string, quantity:number) => Promise<void>;

};

type ExtendedCart = currentCart.Cart & {
  subtotal?: {
    amount: string;
    convertedAmount: string;
    formattedAmount: string;
    formattedConvertedAmount: string;
  };
};

export const useCartStore = create<CartState>((set) => ({
  cart: null,
  isLoading: false,
  counter: 0,

  getCart: async (wixClient) => {
    set({ isLoading: true });
    try {
      const cart = await wixClient.currentCart.getCurrentCart();
      set({
        cart: cart || null,
        counter: cart?.lineItems?.length || 0,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error fetching cart:", error);
      set((prev) => ({ ...prev, isLoading: false }));
    }
  },

  addItem: async (wixClient, productId,quantity, variantId) => {
    set((state) => ({ ...state, isLoading: true }));

    try {
      const response = await wixClient.currentCart.addToCurrentCart({
        lineItems: [
          {
            catalogReference: {
              appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
              catalogItemId: productId,
              ...(variantId ? { options: { variantId } } : {}),
            },
            quantity
          },
        ],
      });

      set({
        cart: response.cart,
        counter: response.cart?.lineItems?.length || 0,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error adding item:", error);
      set({ isLoading: false });
    }
  },

  removeItem: async (wixClient, itemId) => {
    set({ isLoading: true });
    try {
      const response = await wixClient.currentCart.removeLineItemsFromCurrentCart(
        [itemId]
      );

      set({
        cart: response.cart,
        counter: response.cart?.lineItems?.length || 0,
        isLoading: false,
      });
    } catch (error) {
      console.error("Error removing item:", error);
      set({ isLoading: false });
      alert("Failed to remove item");
    }
  },

  updateItemQuantity: async (wixClient, itemId, quantity) => {
    set({ isLoading: true });
    try {
      // Assuming the backend function for updating item quantity is called directly here
      const updatedCart = await wixClient.currentCart.updateCurrentCartLineItemQuantity([
        { _id: itemId, quantity },
      ]);

      set({
        cart: updatedCart.cart,
        counter: updatedCart.cart?.lineItems?.length || 0,
        isLoading: false,
      });
    } catch (error) {
      console.error("Failed to update item quantity:", error);
      set({ isLoading: false });
    }
  },
}));
