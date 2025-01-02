import { useLocation } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { addDays, format } from "date-fns";
import { fr } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";

const Reservations = () => {
  const location = useLocation();
  const { toast } = useToast();
  const product = location.state?.product;
  const tomorrow = addDays(new Date(), 1);
  
  const [date, setDate] = useState<Date>(tomorrow);
  const [time, setTime] = useState("09:00");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!product) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner un produit",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Réservation confirmée",
      description: `Votre réservation pour ${product.name} est confirmée pour le ${format(date, 'dd MMMM yyyy', { locale: fr })} à ${time}.`,
    });
  };

  return (
    <div className="container max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Réserver votre produit</h1>
      
      {product && (
        <div className="mb-8 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-muted-foreground">{product.price.toFixed(2)} €</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <Label htmlFor="name">Nom</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="space-y-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-4">
          <Label htmlFor="phone">Téléphone</Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="space-y-4">
          <Label>Date de retrait (à partir de demain)</Label>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => newDate && setDate(newDate)}
            disabled={(date) => date < tomorrow}
            className="rounded-md border"
          />
        </div>

        <div className="space-y-4">
          <Label htmlFor="time">Heure de retrait</Label>
          <Input
            id="time"
            type="time"
            min="09:00"
            max="18:00"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Confirmer la réservation
        </Button>
      </form>
    </div>
  );
};

export default Reservations;