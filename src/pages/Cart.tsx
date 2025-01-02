import { useState } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const Cart = () => {
  const { items, removeItem, updateQuantity } = useCart();
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
    toast({
      title: "Panier mis à jour",
      description: "La quantité a été modifiée avec succès.",
    });
  };

  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id);
    toast({
      title: "Produit retiré",
      description: `${name} a été retiré de votre panier.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <h1 className="text-2xl sm:text-3xl font-bold font-playfair mb-8">
          Votre Panier
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Votre panier est vide</p>
            <Button asChild className="mt-4">
              <a href="/">Continuer vos achats</a>
            </Button>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 border p-4 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-muted-foreground">
                      {item.price.toFixed(2)} € par unité
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 w-full sm:w-auto justify-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-right w-full sm:w-auto flex justify-between sm:block">
                    <div className="font-semibold">
                      {(item.price * item.quantity).toFixed(2)} €
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500 hover:text-red-600"
                      onClick={() => handleRemoveItem(item.id, item.name)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t pt-8">
              <div className="flex justify-between items-center">
                <span className="text-xl font-semibold">Total</span>
                <span className="text-2xl font-bold">{total.toFixed(2)} €</span>
              </div>
              <Button className="w-full mt-4" size="lg">
                Procéder au paiement
              </Button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;