import { CakeSlice, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const produitsVedettes = [
  {
    id: "1",
    name: "Croissant Classique",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    description: "Beurré, feuilleté et parfaitement doré",
  },
  {
    id: "2",
    name: "Pain au Levain Artisanal",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb",
    description: "Fermentation naturelle avec une croûte croustillante",
  },
  {
    id: "3",
    name: "Baguette Tradition",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1597079910443-60c43fc4f729",
    description: "Recette traditionnelle, cuite chaque jour",
  },
];

const Index = () => {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: typeof produitsVedettes[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    toast({
      title: "Ajouté au panier",
      description: `${product.name} a été ajouté à votre panier.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Section Hero */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
            Boulangerie Artisanale d'Exception
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Découvrez l'alliance parfaite entre tradition et innovation dans chaque bouchée
          </p>
          <Button asChild size="lg">
            <a href="#featured">
              Découvrir nos Produits <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Produits Vedettes */}
      <section
        id="featured"
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <h2 className="text-3xl font-bold font-playfair text-center mb-12">
          Nos Produits Vedettes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {produitsVedettes.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold">
                    {product.price.toFixed(2)} €
                  </span>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    size="sm"
                    className="flex items-center"
                  >
                    <CakeSlice className="mr-2 h-4 w-4" />
                    Ajouter au panier
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;