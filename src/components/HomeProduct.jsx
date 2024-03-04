export default function HomeProduct() {
  const position = 'left';
  const product = {
    name: "Sauvage Eau de Toilette",
    category: "men",
    brand: "Dior",
    price: "$120.00",
    description: "A radically fresh composition, Dior Sauvage Eau de Toilette opens with radiant top notes of Calabrian Bergamot, before Amberwood unleashes its powerfully woody trail. A Sauvage cologne for men inspired by wide-open spaces under a blue sky that dominates a white-hot desert landscape.",
    composition: "\"To create Sauvage, I used man as my starting point. A strong and unmistakable masculinity. Like the image of a man who transcends time and fashion.\"- François Demachy, Dior Perfumer-Creator",
    family: "Fresh & Woody",
    id: "fccb6f7f-e4b4-4c87-ae68-b1aef39acdbe"
  }

  return (
    <div className={`home__product__container__${position} flex flex-col items-center mx-12`}>
      <div className="max-w-[200px]">
        <img src={`../../images/${product.id}-0.jpg`} alt="Product Image" loading="lazy" />
      </div>
      <div className={`home__product__text__${position} text-center px`}>
        <h3 className="text-3xl">{product.name}</h3>
        <p>{product.composition}</p>
      </div>
    </div>
  )
}