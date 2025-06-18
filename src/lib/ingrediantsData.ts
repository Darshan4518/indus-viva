import Amlagex from "@/assets/img/products/Amlagex.png";
import ashwagandha from "@/assets/img/products/ashwagandha.png";
import Bacolive from "@/assets/img/products/Bacolive.png";
import Banalife from "@/assets/img/products/Banalife.png";
import Belafort from "@/assets/img/products/Belafort.png";
import BioTurmin from "@/assets/img/products/BioTurmin.png";
import Boswegex from "@/assets/img/products/Boswegex.png";
import Carogex from "@/assets/img/products/Carogex.png";
import Chlorobean from "@/assets/img/products/Chlorobean.png";
import Rosegex from "@/assets/img/products/Rosegex.png";
import Salcital from "@/assets/img/products/Salcital.png";
import Senna from "@/assets/img/products/Senna.png";
import Zinberin from "@/assets/img/products/Zinberin.png";
import sesavita from "@/assets/img/products/Sesavita.png";
import Nufotrim from "@/assets/img/products/Nufotrim.png";
import Mucuna from "@/assets/img/products/Velvet-Bean.png";
import BerberineHydrochloride from "@/assets/img/products/Berberine-Hydrochloride.png";


export interface IProducts {
  id: number;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  images: string[];
  aboutImage: string;
  descriptionPoints: string[];
}

export const products: IProducts[] = [
  {
    id: 1,
    title: "Sesavita™ – Sesame Seed Extract",
    subtitle:
      "Harness the clinically proven power of sesame lignans. Support your heart, liver, immune system, and restful sleep naturally.",
    badge: "100% Herbal | Clinically Backed | Food & Cosmetic Grade",
    description:
      "Sesavita, harnessing clinically proven lignans from sesame, has transformed lives for over a decade. This remarkable extract modulates lipid metabolism, reduces lipid peroxidation, and enhances liver function, ensuring comprehensive health benefits. Sesavita's potential extends to immunoregulation and the prevention of thrombosis, showcasing its multifaceted impact on well-being. At the heart of Sesavita lies sesamin, a pivotal component known for its cholesterol-lowering effects, regulation of blood sugar levels, and promotion of relaxation with improved sleep quality. Experience the holistic benefits of Sesavita and discover a new standard in natural health support.",
    images: [sesavita],
    aboutImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nOk6x9Qj2WtC0EpkackPZOeiZmCIcg.png",
    descriptionPoints: [
      "Clinically proven herbal supplement.",
      "Available in different grades which are suitable for the food and beverage industry and cosmetic industry.",
    ],
  },
  {
    id: 2,
    title: "BioTurmin™ – Turmeric Extract",
    subtitle:
      "Harnessing the power of Curcuma longa, BioTurmin offers antioxidant, anti-inflammatory, and antimicrobial benefits with enhanced bioavailability.",
    badge: "100% Natural | Organic Certified | Bio-Emulsion Enhanced",
    description:
      "BioTurmin, developed from premium-grade Curcuma longa, is scientifically backed for its antioxidant, anti-inflammatory, and antimicrobial properties. It supports immunity, reduces oxidative stress, and shows promise in inhibiting tumor proliferation. The BioTurmin-WD variant, formulated with proprietary Bio-Emulsion Technology, delivers a 7.03x higher bioavailability compared to standard 95% curcuminoids. Ethanol-grade, solvent-free, and organically certified, BioTurmin is traceable from seed to shelf, offering a clean and potent solution for overall vitality and well-being.",
    images: [BioTurmin],
    aboutImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BioTurmin.png",
    descriptionPoints: [
      "Ethanol grade Curcuma longa extract free from other solvents.",
      "Organic grade with certified traceability from seed to shelf.",
      "100% natural extract in additive-free granule form.",
      "BioTurmin-WD offers 7.03x higher bioavailability via Bio-Emulsion Technology.",
    ],
  },
  {
    id: 3,
    title: "Salcital™ – Salacia Extract",
    subtitle:
      "Clinically proven Salacia extract for effective blood sugar and lipid level regulation in individuals with Prediabetes and Hyperlipidemia.",
    badge: "Clinically Validated | 100% Water Soluble | Solvent Free",
    description:
      "Salcital stands as the definitive solution to the contemporary challenge of elevated blood sugar levels. This clinically proven extract of Salacia has consistently transformed lives by effectively regulating blood sugar levels and enhancing lipid profiles in individuals with Hyperlipidemia and Prediabetes. Salcital's impact is not just about managing symptoms but about fostering holistic health improvements, ensuring a brighter future for those seeking balanced metabolic health. Trust Salcital for its proven efficacy and commitment to advancing well-being through natural solutions.",
    images: [Salcital],
    aboutImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Salcital.png",
    descriptionPoints: [
      "Clinically studied ingredient with proven metabolic benefits.",
      "100% water soluble formulation for versatile use.",
      "Solvent-free extract for clean and safe application.",
      "In-house biological standardization using ELISA reader.",
      "In-house Salacinol quantified by LC-MS-MS.",
    ],
  },
  {
    id: 4,
    title: "Bacolive™ – Bacopa Extract",
    subtitle:
      "Unlock your cognitive potential with Bacopa monnieri, a time-tested herb supporting memory, learning, and stress relief.",
    badge: "USP 44 Standard | Ethanol Grade | Scientifically Validated",
    description:
      "Discover Bacolive, where the ancient wisdom of Bacopa monnieri comes to life. This creeping herb, native to the wetlands of southern and eastern India, has been revered for centuries for its potent medicinal properties. Bacolive harnesses the power of bacosides, active compounds belonging to the saponin class, renowned for enhancing memory, learning, and cognitive abilities. These compounds also support brain health, potentially slowing cognitive decline and promoting healthy aging. Bacolive is scientifically studied & cherished for its stress-relieving effects and its ability to enhance overall cognitive function and memory retention. Experience the legacy of Bacopa with Bacolive and unlock your cognitive potential naturally.",
    images: [Bacolive],
    aboutImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bacolive.png",
    descriptionPoints: [
      "Free from Polyaromatic Hydrocarbons, Pyrrolizidine alkaloids, heavy metals, pesticides, and ETO residues.",
      "Ethanol grade extract ensuring clean and safe formulation.",
      "Controlled sourcing coupled with a unique manufacturing process.",
      "Standardized as per USP 44 using 5 peak method and USP reference standards.",
      "Scientifically validated for enhancing memory and cognitive function.",
    ],
  },
  {
    id: 5,
    title: "Boswegex™ – Boswellia Extract",
    subtitle:
      "Enhance bone, respiratory, and skin health with Boswellia serrata, the time-honored Ayurvedic herb.",
    badge:
      "Scientifically Validated | Green Manufacturing | Versatile Applications",
    description:
      "Boswegex, where the benefits of Boswellia serrata shine beyond traditional medicine. Known as Indian frankincense or Shallaki, Boswegex is celebrated for its contributions to bone health, enhancing bone mineral density and overall wellness. Scientifically studied for its powerful anti-inflammatory properties, it extends support to respiratory health, providing relief and promoting clearer breathing. Boswegex's versatility is further showcased in cosmetics, where it serves as a favored ingredient for promoting skin health and vitality. Embrace the holistic benefits of Boswellia serrata with Boswegex and elevate your well-being naturally.",
    images: [Boswegex],
    aboutImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Boswegex.png",
    descriptionPoints: [
      "Green manufacturing technology for Boswellic extracts.",
      "Enrichment capability to isolate individual Boswellic acids.",
      "High bulk density grades – dust-free, non-sticky, free-flowing granules.",
      "Scientifically validated for bone and respiratory support.",
    ],
  },
  {
    id: 6,
    title: "Nufotrim™ – Coleus Extract",
    subtitle:
      "Tap into the power of forskolin from Coleus forskohlii to promote fat loss and enhance metabolic health.",
    badge: "Batch Consistency | Forskolin Rich | Naturally Thermogenic",
    description:
      "Nufotrim, where Coleus forskohlii takes center stage in harnessing natural health benefits. This perennial herb from the mint family is renowned in traditional medicine for its production of forskolin. Forskolin activates adenylate cyclase, elevating intracellular cAMP levels to enhance fat utilization, boost metabolic rate, and support thermogenic responses to food intake. Nufotrim's forskolin supplementation aims to promote effective fat loss while preserving lean muscle mass, offering a natural approach to achieving a healthier body composition. Discover the potential of Coleus forskohlii with Nufotrim and embark on your journey to enhanced wellness.",
    images: [Nufotrim],
    aboutImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Nufotrim.png",
    descriptionPoints: [
      "Strong backward integration for supply chain control.",
      "Batch-to-batch quality consistency.",
      "Naturally rich in forskolin for effective fat metabolism support.",
    ],
  },
  {
    id: 7,
    title: "Ashwagex™ – Ashwagandha Extract",
    subtitle:
      "Experience ancient Ayurvedic vitality through Ashwagandha’s ability to reduce stress, boost strength, and promote restful sleep.",
    badge:
      "Root-Only Extract | Withaferin A Controlled | Scientifically Validated",
    description:
      "Ashwagex, where the ancient wisdom of Withania somnifera, popularly known as Ashwagandha, unfolds. This wonder herb from the treasures of Ayurveda has been revered for its versatile health benefits. Ashwagex supports improved quality of sleep, boosts immunity, enhances strength and vigor, and promotes overall wellness. Harnessing the power of Ashwagandha, Ashwagex offers a natural and holistic approach to achieving vitality and well-being. Embrace the time-tested benefits of Ashwagandha with Ashwagex and nurture your health from within.",
    images: [ashwagandha],
    aboutImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ashwagex.png",
    descriptionPoints: [
      "100% root-only extract with no aerial part adulteration.",
      "HPLC analysis of Flavanol glycosides (USP Spec 0.04%) ensures compliance.",
      "Unique manufacturing process keeps Withaferin A below 0.1%.",
      "Supports restful sleep, immunity, strength, and vitality.",
    ],
  },
  {
    id: 8,
    title: "Sennagex™ – Senna Extract",
    subtitle:
      "Time-tested digestive support using natural Senna glycosides for constipation relief and colon cleansing.",
    badge: "EU Compliant | Ethanol Processed | Innovative Manufacturing",
    description:
      "Sennagex, where the ancient benefits of Senna are celebrated for their profound impact on digestive health. Senna, a renowned herb used since medieval times, is revered for its potent laxative properties. Its active component, Senna glycosides, effectively treat constipation and aid in clearing the large intestine before surgery. Modern studies also highlight Senna's potential in weight management, making it a versatile choice for maintaining digestive regularity and supporting overall wellness. Trust Sennagex to deliver the time-tested benefits of Senna in promoting a healthy digestive system naturally.",
    images: [Senna],
    aboutImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Sennagex.png",
    descriptionPoints: [
      "HAD (Hydroxyanthracene Derivatives) complying with EU regulation.",
      "Lead (heavy metals) less than 1ppm.",
      "Manufactured through innovative proprietary (under IP creation) technology.",
      "Processed only in ethanol.",
    ],
  },
  {
    id: 9,
    title: "Carogex™ – Beta Carotene from Dunaliella salina",
    subtitle:
      "Natural antioxidant-rich beta-carotene from algae to support vision, skin, and immune health.",
    badge: "Algae Derived | Solvent Free | Customizable Grades",
    description:
      "Introducing Carogex, where the power of beta-carotene takes center stage in promoting vibrant health. This natural pigment and antioxidant, abundant in colorful fruits, vegetables, and algae, plays a pivotal role in overall well-being. Acting as a precursor to vitamin A, essential for vision, skin health, and immune function, Carogex supports optimal bodily functions. Its antioxidant properties combat free radicals, shielding against oxidative stress and age-related conditions. Carogex also boosts immune responses and supports skin health, underscoring its versatility and broad spectrum of health benefits. Embrace Carogex for natural support and elevate your health regimen with the benefits of beta-carotene.",
    images: [Carogex],
    aboutImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Carogex.png",
    descriptionPoints: [
      "Made from algal source of Dunaliella salina.",
      "Free from harmful solvents.",
      "Customized grades available to suit various end applications.",
      "Complies with USP and EU regulations.",
    ],
  },
  {
    id: 10,
    title: "Banalife™ – Banaba Leaf Extract",
    subtitle:
      "Promotes blood sugar balance, weight management, and heart health with corosolic acid-rich Banaba.",
    badge: "Vegan | Solvent-Free | Versatile Applications",
    description:
      "Banalife, where the extraordinary benefits of Banaba, scientifically known as Lagerstroemia speciosa, unfold. Celebrated worldwide for its exceptional health-promoting properties, Banaba's leaves are enriched with bioactive compounds like corosolic acid, renowned for their medicinal prowess. Banalife stands out for its ability to effectively regulate blood sugar levels by enhancing glucose uptake in cells and addressing insulin resistance. Furthermore, Banalife's innovative approach extends to supporting weight management and promoting cardiovascular health. Research highlights its potential to improve lipid profiles, potentially reducing cholesterol and triglyceride levels. Embrace Banalife and experience the holistic benefits of Banaba for enhanced well-being and vitality.",
    images: [Banalife],
    aboutImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Banalife.png",
    descriptionPoints: [
      "100% free of harmful solvents.",
      "100% vegan.",
      "100% preservative free.",
      "Compatible with multiple product applications.",
      "No offensive taste – can be easily incorporated into foods and beverages.",
    ],
  },
  {
    id: 11,
    title: "Chlorobean™ – Green Coffee Bean Extract",
    subtitle:
      "Harness the antioxidant power of chlorogenic acids for metabolism and stress support.",
    badge: "Caffeine <1% | Polyphenol Rich | Additive-Free",
    description:
      "Chlorobean, where the beloved global beverage, coffee, transforms into a powerhouse of health benefits. Chlorobean is enriched with polyphenols, notably Chlorogenic acids (CGAs), renowned for their multifaceted health advantages. These compounds are abundant in coffee and play a pivotal role in boosting metabolism, reducing stress levels, and supporting weight management efforts. Chlorogenic acids in Chlorobean act as potent antioxidants, offering protection against oxidative damage and contributing to weight loss, promoting healthier blood sugar levels, and safeguarding DNA integrity. Embrace Chlorobean for a flavorful way to enhance your well-being and harness the natural health benefits of coffee.",
    images: [Chlorobean],
    aboutImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Chlorobean.png",
    descriptionPoints: [
      "Excellent backward integration to ensure consistency in quality, price and supply.",
      "Caffeine less than 1%.",
      "Free from dextrin or other additives.",
    ],
  },
  {
    id: 12,
    title: "Amlagex™ – Amla Extract",
    subtitle:
      "India's ancient superfruit, standardized for Vitamin C, supporting immunity, skin, digestion, and organ function.",
    badge: "Solvent Free | Water Dispersible | Cosmetic Friendly",
    description:
      "Amlagex, where the revered Amla berry, also known as Emblica officinalis, takes center stage with its extraordinary medicinal prowess. Hailed as the 'remover of all diseases' in India, Amlagex is renowned for its comprehensive health benefits. This superfruit is celebrated for bolstering immune function, enhancing liver and heart health, stimulating hair growth, supporting optimal digestion, and improving kidney function. Embrace the holistic benefits of Amla with Amlagex and experience the transformative power of this ancient remedy for vibrant health and well-being.",
    images: [Amlagex],
    aboutImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Amlagex.png",
    descriptionPoints: [
      "Excellent water dispersibility.",
      "Uniform bulk density for batch-to-batch consistency during encapsulation.",
      "Uniformity in color across all batches.",
      "White color from fresh fruit extract makes it suitable for cosmetic use.",
      "Standardized to Vitamin C content – ideal as a vitamin supplement.",
      "Solvent-free extract.",
      "Customizable as per customer requirement.",
    ],
  },
  {
    id: 13,
    title: "Zinberin™ – Ginger Extract",
    subtitle:
      "Timeless digestive and immune support with pure, potent ginger extract.",
    badge: "CO2 Extract | Solvent-Free | Microencapsulated",
    images: [Zinberin],

    description:
      "Zinberin, where the timeless virtues of ginger unfold through centuries of traditional medicine and culinary excellence. Revered for its versatility, ginger has been a stalwart remedy for digestive issues, respiratory ailments, and pain relief across cultures. Zinberin's potent ability to stimulate digestion offers relief from bloating, gas, and constipation, enhancing overall comfort. Moreover, ginger's renowned immune-boosting properties fortify defences against infections, promoting robust immune function. Embrace the heritage of ginger with Zinberin and discover a natural solution for wellness and vitality.",
    descriptionPoints: [
      "CO2 Grade or SCFE (Super Critical Fluid Extraction) Grade",
      "Ethanol grade and completely free of harmful solvent residues and manufactured using State-of-the-art isolation procedure",
      "Complete backward integration and traceability from finished goods to the seeds",
      "Free from additives and carriers",
      "Pesticides & Preservatives free",
      "Microencapsulated grades for various applications",
    ],
    aboutImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Amlagex.png",
  },
  {
    id: 14,
    title: "Rosegex™ – Rosemary Extract",
    subtitle:
      "Brain support, sports recovery, and meat preservation from nature’s antioxidant.",
    badge: "Solvent Free | Beverage Grade | Antioxidant Rich",
    images: [Rosegex],

    description:
      "Rosegex is an exceptional product with a multitude of benefits for brain health, sports nutrition, and meat preservation. For brain health, Rosegex enhances cognitive function and memory through its potent compounds, including rosmarinic acid and carnosic acid. These elements protect the brain from oxidative stress, promoting mental clarity and concentration. The ursolic acid’s antioxidant and anti-inflammatory properties help reduce exercise-induced oxidative stress and muscle inflammation. Rosegex also extends meat shelf life using natural antimicrobial action while preventing oxidative rancidity.",
    descriptionPoints: [
      "Free from harmful solvents",
      "Special grades for beverage available",
      "Pesticide and preservative free",
    ],
    aboutImage:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Amlagex.png",
  },
  {
    id: 15,
    title: "Alphaberin™ – Berberine Hydrochloride",
    subtitle:
      "Natural metabolic and cardiovascular support powered by Berberis aristata.",
    badge: "Natural Source | 97% Purity | Solvent-Free",
    images: [BerberineHydrochloride],

    description:
      "Berberine Hydrochloride is renowned for its remarkable ability to support metabolic wellness, including effective blood sugar regulation and enhanced insulin sensitivity. Its powerful antimicrobial and anti-inflammatory properties make it an excellent choice for combating infections and reducing inflammation. Additionally, Berberine promotes cardiovascular health by balancing cholesterol levels and supporting healthy blood pressure. Experience the transformative benefits of this exceptional supplement.",
    descriptionPoints: [
      "Berberine Hydrochloride 97% Powder by HPLC",
      "Made from natural source",
      "Free from harmful solvents",
    ],
    aboutImage: "",
  },
  {
    id: 16,
    title: "BelaFort™ – Terminalia bellirica Extract",
    subtitle:
      "Supports digestion, liver health, and immunity with potent polyphenols.",
    badge: "Premium Fruit Source | Antioxidant Rich | Metabolic Wellness",
    images: [Belafort],

    aboutImage: "",
    description:
      "Terminalia bellirica extract is known for its beneficial effects, including support for digestive and liver health, assistance with weight management, and reduction of metabolic and cardiovascular issues. Its significant antioxidant content strengthens the immune system and helps protect against respiratory problems. Our extract is sourced from premium fruit and processed with precision to ensure optimal potency, focusing on preserving Gallic Acid and polyphenols.",
    descriptionPoints: [
      "Sourced from premium Terminalia bellirica fruit",
      "Processed with precision to preserve Gallic Acid",
      "Supports liver, digestive, and respiratory health",
    ],
  },
  {
    id: 17,
    title: "Mucuna Extract",
    subtitle:
      "Traditional adaptogenic support for brain, nerves, and vitality from velvet bean.",
    badge: "Ayurvedic Heritage | Dopamine Support | Natural Neuroprotective",
    images: [Mucuna],

    aboutImage: "",
    description:
      "Mucuna, also known as velvet bean, has a long history of use in traditional medicine across India, Africa, and South America. In Ayurveda, Mucuna is used for its wide-ranging therapeutic properties, including support for Parkinson’s disease, treatment of snakebite, and enhancement of sexual function. Mucuna’s natural source of L-DOPA, a precursor to dopamine, plays a critical role in supporting brain and nervous system health. Embrace the ancient power of Mucuna for neurological wellness, stress relief, and revitalized energy.",
    descriptionPoints: [
      "Natural source of L-DOPA to support dopamine levels.",
      "Used traditionally in Ayurveda for Parkinson’s and vitality.",
      "Supports brain, mood, and nervous system function.",
      "Adaptogenic herb known for stress resilience and hormonal balance.",
    ],
  },
];
