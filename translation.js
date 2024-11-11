const translationData = {
  en: {
    intro: {
      title: "unusual",
      subtitle: "natural products",
      line1:"We are doing a little market research before going live. It is not a typical survey. It's more personal than that!",
      line2:" We want to hear your thoughts and impressions about these perhaps not-so-wellknown unusual products. Would you like to try these?",
      line3: "Of course, there are many more products not listed here. For now, click and enjoy exploring the list-- also photos from where we come from-- and tell us what you think.",
    },
    buttons: {
      contact: "Contact Us",
      about: "About Us",
    },
    productDetails: {
      title: "Product Details",
      message: "Select a product to view details here.",
    },
    products: {
      Vetiver: {
        name: "Vetiver",
        description: "Vetiver is known for its calming properties.",
        items: [
          { name: "Roots", desc: "Vetiver roots are aromatic and naturally cooling. Use in sachets or cooling mats for natural fragrance.", iconKey: "roots" },
          { name: "Powder", desc: "Popular in skincare and natural perfumery. Add to face masks for a soothing, fragrant effect.", iconKey: "powder" },
          { name: "Oil", desc: "Vetiver essential oil with a calming aroma. Diffuse a few drops to create a relaxing atmosphere.", iconKey: "oil" },
          { name: "Scrub", desc: "Exfoliating scrub with refreshing properties. Apply to damp skin and gently exfoliate.", iconKey: "scrub" },
          { name: "Soap", desc: "Natural, moisturizing soap with a vetiver scent. Use daily for body cleansing and aromatherapy benefits.", iconKey: "soap" },
          { name: "Incense Sticks", desc: "Vetiver-infused incense for relaxation. Light to create a soothing, aromatic ambiance.", iconKey: "incense_sticks" }
        ]
      },
      SoapBerries: {
        name: "Soap Berries",
        description: "Natural soap berries are an eco-friendly alternative to chemical-based cleansers, used for laundry and hair care.",
        items: [
          { name: "Whole Berries", desc: "Used for natural laundry detergent. Place in a cloth bag for laundry.", iconKey: "whole_berries" },
          { name: "Powder", desc: "Acts as a natural shampoo and cleanser. Mix with water for hair wash.", iconKey: "powder" }
        ]
      },
      Kokum: {
        name: "Kokum",
        description: "Kokum is a tropical fruit known for its cooling properties and is used in skincare and refreshing summer drinks.",
        items: [
          { name: "Butter", desc: "Rich, natural moisturizer from kokum seeds. Apply on dry skin for deep hydration.", iconKey: "butter" },
          { name: "Syrup", desc: "Refreshing summer drink with cooling properties. Mix with water or soda for a tangy, refreshing beverage.", iconKey: "syrup" }
        ]
      },
      Neem: {
        name: "Neem",
        description: "Neem is valued in traditional medicine for its antibacterial properties, used in skincare and health remedies.",
        items: [
          { name: "Powder", desc: "Natural remedy for skin and hair health. Mix with water to make a paste or add to face masks.", iconKey: "powder" },
          { name: "Soap", desc: "Gentle, antibacterial soap for skin care. Use for daily body cleansing.", iconKey: "soap" }
        ]
      },
      Amla: {
        name: "Amla",
        description: "Amla, or Indian Gooseberry, is rich in vitamin C and is used to promote skin health and boost immunity.",
        items: [
          { name: "Raw", desc: "Fresh amla fruit, rich in vitamin C. Eat raw or juice for immune support.", iconKey: "amla" },
          { name: "Dry", desc: "Dried amla for a tangy, healthful snack. Add to teas or eat as-is.", iconKey: "dry" },
          { name: "Powder", desc: "Amla powder for skin and hair care. Mix with water for a natural face or hair mask.", iconKey: "powder" },
        ]
      },
      Tulsi: {
        name: "Tulsi",
        description: "Tulsi, or Holy Basil, is revered for its immune-boosting and stress-relieving properties.",
        items: [
          { name: "Powder", desc: "Tulsi powder for skincare and health. Mix with water or honey for a face pack or take as a supplement.", iconKey: "powder" },
          { name: "Tea", desc: "Relaxing herbal tea made from Tulsi leaves. Brew in hot water for a refreshing, stress-relieving drink.", iconKey: "powder" }
        ]
      },
      Shatavari: {
        name: "Shatavari",
        description: "Shatavari is an adaptogenic herb known for supporting women’s health and hormonal balance.",
        items: [
          { name: "Powder", desc: "Shatavari powder, traditionally used for hormonal balance. Mix into milk or smoothies.", iconKey: "powder" },
          { name: "Liquid Extract", desc: "Shatavari extract for easy use. Add drops to water for a daily health boost.", iconKey: "powder" }
        ]
      },
      Sandalwood: {
        name: "Sandalwood",
        description: "Sandalwood is valued for its calming fragrance and skincare benefits, especially for soothing skin.",
        items: [
          { name: "Powder", desc: "Sandalwood powder, ideal for face packs and skincare. Mix with rose water for a calming mask.", iconKey: "powder" },
          { name: "Oil", desc: "Sandalwood essential oil with a soothing aroma. Dilute and apply to skin or use in diffusers.", iconKey: "oil" },
          { name: "Incense Sticks", desc: "Natural sandalwood incense sticks for a calming, fragrant ambiance.", iconKey: "incense_sticks" }
        ]
      },
      KasturiManjal: {
        name: "Kasturi Manjal",
        description: "Also known as wild turmeric, Kasturi Manjal is used in skincare for brightening and antibacterial properties.",
        items: [
          { name: "Powder", desc: "Wild turmeric powder, gentle on the skin. Mix with yogurt or milk for a brightening face pack.", iconKey: "powder" },
          { name: "Soap", desc: "Kasturi Manjal soap for natural skin cleansing and brightening.", iconKey: "soap" },
        ]
      },
      Turmeric: {
        name: "Turmeric",
        description: "Turmeric is widely known for its anti-inflammatory and skin-brightening benefits.",
        items: [
          { name: "Powder", desc: "High-quality turmeric powder for culinary and skincare use. Add to recipes or mix into face masks.", iconKey: "powder" },
          { name: "Golden Milk Mix", desc: "A warming blend of turmeric and spices for a soothing golden milk drink.", iconKey: "powder" }
        ]
      },
      Rose: {
        name: "Rose",
        description: "Rose water and extracts are cherished for their floral aroma and soothing effects in beauty and culinary uses.",
        items: [
          { name: "Rose Water", desc: "Natural toner and skin refresher. Apply to skin with a cotton pad or add to recipes.", iconKey: "rose_water" },
          { name: "Powder", desc: "Fragrant addition to culinary dishes and skincare. Mix into face masks or desserts.", iconKey: "powder" },
          { name: "Marmalade", desc: "Delicious, fragrant preserve made from rose petals. Spread on toast or add to desserts.", iconKey: "marmalade" }
        ]
      }
    },
    form: {
      heading: "I want to know more",
      nameLabel: "Name- how would you like us to greet you:",
      emailLabel: "Email, so that we can send you updates and offers:",
      personalMessageLabel: "Personal message to us:",
      productLabel: "What intrigues you:",
      countryLabel: "Country",
      otherProducts: "Tell me about other unusual products and also how to use those.",
      preBooking: "I am interested in pre-booking.",
      submitButton: "Submit",
      cancelButton: "Cancel",
    },
    footer: {
      text: "© 2024 unusual natural products",
    },
    about: {
      introduction: "We are a small family from the coastal region of Maharashtra. The region around Ratnagiri is world famous for Alphonso mangoes, coconuts, jackfruits, and cashews. We have been growing and using several of these products since generations on our about 50 acre land.",
      visit: "You are welcome to visit us!",
      cards: [
        { text: "Working in the red soil. Monsoon makes it all beautiful.", image: "farm_1.jpg" },
        { text: "A young mango tree.", image: "farm_2.jpg" },
        { text: "A young cashew tree.", image: "farm_3.jpg" },
        { text: "Jackfruits.", image: "farm_4.jpg" },
        { text: "The farm in summer.", image: "farm_5.jpg" },
        { text: "Alphonso mango.", image: "farm_6.jpg" },
        { text: "Cashew apple.", image: "farm_7.jpg" },
        { text: "Mangoes.", image: "farm_8.jpg" },
        { text: "Roasting cashews the old way.", image: "farm_9.jpg" },
        { text: "Black pepper.", image: "farm_11.jpg" },
        { text: "Betel nut trees.", image: "farm_12.jpg" },
        { text: "The banana flower.", image: "farm_13.jpg" },
        { text: "The backyard.", image: "home_2.jpg" },
        { text: "The backyard.", image: "home_3.jpg" },
        { text: "The village road.", image: "village_1.jpg" },
        { text: "This is where we live.", image: "home_1.jpg" }
      ],
      backToHome: "Back to Home",
      footer: "© 2024 unusual natural products",
    }
  },
  de : {
    intro: {
      title: "unusual",
      subtitle: "natural products",
      line1: "Wir machen eine kleine Marktforschung, bevor wir live gehen. Es ist keine typische Umfrage. Es ist persönlicher als das!",
      line2: "Wir möchten Ihre Gedanken und Eindrücke über diese vielleicht weniger bekannten, ungewöhnlichen Produkte hören.",
      line3: "Natürlich gibt es viele weitere Produkte, die hier nicht aufgeführt sind. Für jetzt klicken Sie und genießen Sie es, die Produktliste zu erkunden – auch Fotos von unserem Herkunftsort – und sagen Sie uns, was Sie denken.",
    },
    buttons: {
      contact: "Kontakt",
      about: "Über uns",
    },
    productDetails: {
      title: "Produktdetails",
      message: "Wählen Sie ein Produkt aus, um hier Details anzuzeigen.",
    },
    products: {
      Vetiver: {
        name: "Vetiver",
        description: "Vetiver ist bekannt für seine beruhigenden Eigenschaften.",
        items: [
          { name: "Wurzeln", desc: "Vetiver-Wurzeln sind aromatisch und kühlend. In Duftbeuteln oder Kühlmatten für natürlichen Duft verwenden.", iconKey: "roots" },
          { name: "Pulver", desc: "Beliebt in Hautpflege und natürlicher Parfümerie. Zu Gesichtsmasken hinzufügen für einen beruhigenden, duftenden Effekt.", iconKey: "powder" },
          { name: "Öl", desc: "Vetiver-Öl mit beruhigendem Aroma. Einige Tropfen in einem Diffuser verwenden, um eine entspannende Atmosphäre zu schaffen.", iconKey: "oil" },
          { name: "Peeling", desc: "Peeling mit erfrischenden Eigenschaften. Auf feuchte Haut auftragen und sanft einmassieren.", iconKey: "scrub" },
          { name: "Seife", desc: "Natürliche, feuchtigkeitsspendende Seife mit Vetiver-Duft. Täglich für die Körperpflege und Aromatherapie verwenden.", iconKey: "soap" },
          { name: "Räucherstäbchen", desc: "Vetiver-Räucherstäbchen zur Entspannung. Anzünden für eine beruhigende, aromatische Atmosphäre.", iconKey: "incense_sticks" }
        ]
      },
      SoapBerries: {
        name: "Waschnüsse",
        description: "Natürliche Waschnüsse sind eine umweltfreundliche Alternative zu chemischen Reinigungsmitteln und werden für Wäsche und Haarpflege verwendet.",
        items: [
          { name: "Ganze Nüsse", desc: "Für natürliches Waschmittel. In einem Stoffbeutel zur Wäsche geben.", iconKey: "whole_berries" },
          { name: "Pulver", desc: "Wirkt als natürliches Shampoo und Reinigungsmittel. Mit Wasser für die Haarwäsche mischen.", iconKey: "powder" }
        ]
      },
      Kokum: {
        name: "Kokum",
        description: "Kokum ist eine tropische Frucht mit kühlenden Eigenschaften und wird in Hautpflege und erfrischenden Sommergetränken verwendet.",
        items: [
          { name: "Butter", desc: "Reichhaltige, natürliche Feuchtigkeitscreme aus Kokum-Samen. Auf trockene Haut für intensive Pflege auftragen.", iconKey: "butter" },
          { name: "Sirup", desc: "Erfrischendes Sommergetränk mit kühlenden Eigenschaften. Mit Wasser oder Soda für ein erfrischendes Getränk mischen.", iconKey: "syrup" }
        ]
      },
      Neem: {
        name: "Neem",
        description: "Neem wird in der traditionellen Medizin für seine antibakteriellen Eigenschaften geschätzt und in Hautpflege und Gesundheitsprodukten verwendet.",
        items: [
          { name: "Pulver", desc: "Natürliches Mittel für Haut- und Haarpflege. Mit Wasser zu einer Paste mischen oder in Gesichtsmasken einarbeiten.", iconKey: "powder" },
          { name: "Seife", desc: "Sanfte, antibakterielle Seife für die Hautpflege. Täglich zur Körperreinigung verwenden.", iconKey: "soap" }
        ]
      },
      Amla: {
        name: "Amla",
        description: "Amla, auch bekannt als indische Stachelbeere, ist reich an Vitamin C und wird zur Förderung der Hautgesundheit und zur Stärkung des Immunsystems verwendet.",
        items: [
          { name: "Roh", desc: "Frische Amla-Frucht, reich an Vitamin C. Roh essen oder Saft für Immunstärkung herstellen.", iconKey: "amla" },
          { name: "Getrocknet", desc: "Getrocknete Amla für einen säuerlichen, gesunden Snack. Zu Tees hinzufügen oder pur genießen.", iconKey: "dry" },
          { name: "Pulver", desc: "Amla-Pulver für Haut- und Haarpflege. Mit Wasser für eine natürliche Gesichts- oder Haarmaske mischen.", iconKey: "powder" }
        ]
      },
      Tulsi: {
        name: "Tulsi",
        description: "Tulsi, auch bekannt als Heiliges Basilikum, wird für seine immunstärkenden und stresslindernden Eigenschaften geschätzt.",
        items: [
          { name: "Pulver", desc: "Tulsi-Pulver für Hautpflege und Gesundheit. Mit Wasser oder Honig für eine Gesichtsmaske oder als Nahrungsergänzung mischen.", iconKey: "powder" },
          { name: "Tee", desc: "Entspannender Kräutertee aus Tulsi-Blättern. In heißem Wasser aufbrühen für ein erfrischendes, stresslinderndes Getränk.", iconKey: "powder" }
        ]
      },
      Shatavari: {
        name: "Shatavari",
        description: "Shatavari ist ein adaptogenes Kraut, das für die Unterstützung der Frauengesundheit und des Hormonhaushalts bekannt ist.",
        items: [
          { name: "Pulver", desc: "Shatavari-Pulver, traditionell zur Unterstützung des Hormonhaushalts. In Milch oder Smoothies mischen.", iconKey: "powder" },
          { name: "Flüssigextrakt", desc: "Shatavari-Extrakt für einfache Anwendung. Einige Tropfen ins Wasser für einen täglichen Gesundheitsschub.", iconKey: "powder" }
        ]
      },
      Sandalwood: {
        name: "Sandelholz",
        description: "Sandelholz wird für seinen beruhigenden Duft und die hautpflegenden Vorteile geschätzt, besonders zur Beruhigung der Haut.",
        items: [
          { name: "Pulver", desc: "Sandelholzpulver, ideal für Gesichtsmasken und Hautpflege. Mit Rosenwasser für eine beruhigende Maske mischen.", iconKey: "powder" },
          { name: "Öl", desc: "Sandelholzöl mit beruhigendem Aroma. Verdünnt auf die Haut auftragen oder in Diffusoren verwenden.", iconKey: "oil" },
          { name: "Räucherstäbchen", desc: "Natürliche Sandelholz-Räucherstäbchen für eine beruhigende, duftende Atmosphäre.", iconKey: "incense_sticks" }
        ]
      },
      KasturiManjal: {
        name: "Kasturi Manjal",
        description: "Auch bekannt als wilde Kurkuma, wird Kasturi Manjal in der Hautpflege für aufhellende und antibakterielle Eigenschaften verwendet.",
        items: [
          { name: "Pulver", desc: "Wilde Kurkuma-Pulver, sanft zur Haut. Mit Joghurt oder Milch für eine aufhellende Gesichtsmaske mischen.", iconKey: "powder" },
          { name: "Seife", desc: "Kasturi Manjal-Seife für natürliche Hautreinigung und Aufhellung.", iconKey: "soap" }
        ]
      },
      Turmeric: {
        name: "Kurkuma",
        description: "Kurkuma ist weithin bekannt für seine entzündungshemmenden und hautaufhellenden Vorteile.",
        items: [
          { name: "Pulver", desc: "Hochwertiges Kurkumapulver für kulinarische und hautpflegende Anwendungen. In Rezepte einfügen oder in Gesichtsmasken mischen.", iconKey: "powder" },
          { name: "Golden Milk Mischung", desc: "Eine wärmende Mischung aus Kurkuma und Gewürzen für ein beruhigendes Golden-Milk-Getränk.", iconKey: "powder" }
        ]
      },
      Rose: {
        name: "Rose",
        description: "Rosenwasser und -extrakte sind wegen ihres blumigen Aromas und ihrer beruhigenden Wirkung in der Schönheitspflege und Küche beliebt.",
        items: [
          { name: "Rosenwasser", desc: "Natürlicher Toner und Erfrischer für die Haut. Mit einem Wattepad auftragen oder in Rezepten verwenden.", iconKey: "rose_water" },
          { name: "Pulver", desc: "Duftende Ergänzung zu kulinarischen Gerichten und Hautpflege. In Gesichtsmasken oder Desserts mischen.", iconKey: "powder" },
          { name: "Marmelade", desc: "Leckere, duftende Konfitüre aus Rosenblättern. Auf Toast streichen oder Desserts hinzufügen.", iconKey: "marmalade" }
        ]
      }
    },
    form: {
      heading: "Ich möchte mehr erfahren",
      nameLabel: "Name - wie sollen wir Sie ansprechen:",
      emailLabel: "E-Mail, damit wir Ihnen Updates und Angebote senden können:",
      personalMessageLabel: "Persönliche Nachricht an uns:",
      productLabel: "Was weckt Ihr Interesse:",
      countryLabel: "Land",
      otherProducts: "Erzählen Sie mir von anderen ungewöhnlichen Produkten und wie man diese verwendet.",
      preBooking: "Ich interessiere mich für eine Vorbestellung.",
      submitButton: "Abschicken",
      cancelButton: "Abbrechen",
    },
    footer: {
      text: "© 2024 unusual natural products",
    },
    about: {
      introduction: "Wir sind eine kleine Familie aus der Küstenregion von Maharashtra. Die Region um Ratnagiri ist weltberühmt für Alphonso-Mangos, Kokosnüsse, Jackfrüchte und Cashewnüsse. Wir bauen seit Generationen viele dieser Produkte auf unserem etwa 50 Hektar großen Land an und nutzen sie.",
      visit: "Sie sind herzlich eingeladen, uns zu besuchen!",
      cards: [
        { text: "Arbeiten im roten Boden. Der Monsun macht alles schön.", image: "farm_1.jpg" },
        { text: "Ein junger Mangobaum.", image: "farm_2.jpg" },
        { text: "Ein junger Cashewbaum.", image: "farm_3.jpg" },
        { text: "Jackfrüchte.", image: "farm_4.jpg" },
        { text: "Die Farm im Sommer.", image: "farm_5.jpg" },
        { text: "Alphonso-Mango.", image: "farm_6.jpg" },
        { text: "Cashewapfel.", image: "farm_7.jpg" },
        { text: "Mangos.", image: "farm_8.jpg" },
        { text: "Cashews auf die alte Weise rösten.", image: "farm_9.jpg" },
        { text: "Schwarzer Pfeffer.", image: "farm_11.jpg" },
        { text: "Betelnusspalmen.", image: "farm_12.jpg" },
        { text: "Die Bananenblüte.", image: "farm_13.jpg" },
        { text: "Der Hinterhof.", image: "home_2.jpg" },
        { text: "Der Hinterhof.", image: "home_3.jpg" },
        { text: "Die Dorfstraße.", image: "village_1.jpg" },
        { text: "Hier leben wir.", image: "home_1.jpg" }
      ],
      backToHome: "Zurück zur Startseite",
      footer: "© 2024 unusual natural products",
    }
  },
  fr : {
    intro: {
      title: "unusual",
      subtitle: "natural products",
      line1: "Nous faisons une petite étude de marché avant de nous lancer. Ce n'est pas une enquête typique. C'est plus personnel que cela !",
      line2: "Nous voulons connaître vos pensées et impressions sur ces produits inhabituels peut-être pas si bien connus.",
      line3: "Bien sûr, il y a beaucoup plus de produits qui ne sont pas répertoriés ici. Pour l'instant, cliquez et profitez de l'exploration de la liste de produits – ainsi que des photos de notre région – et dites-nous ce que vous en pensez."
    },
    buttons: {
      contact: "Contactez-nous",
      about: "À propos",
    },
    productDetails: {
      title: "Détails du produit",
      message: "Sélectionnez un produit pour afficher les détails ici.",
    },
    products: {
      Vetiver: {
        name: "Vétiver",
        description: "Le vétiver est connu pour ses propriétés apaisantes.",
        items: [
          { name: "Racines", desc: "Les racines de vétiver sont aromatiques et naturellement rafraîchissantes. Utilisez-les dans des sachets ou des tapis rafraîchissants pour un parfum naturel.", iconKey: "roots" },
          { name: "Poudre", desc: "Populaire en soins de la peau et en parfumerie naturelle. Ajoutez-la aux masques pour un effet apaisant et parfumé.", iconKey: "powder" },
          { name: "Huile", desc: "Huile essentielle de vétiver avec un arôme apaisant. Diffusez quelques gouttes pour créer une ambiance relaxante.", iconKey: "oil" },
          { name: "Gommage", desc: "Gommage exfoliant aux propriétés rafraîchissantes. Appliquez sur peau humide et exfoliez délicatement.", iconKey: "scrub" },
          { name: "Savon", desc: "Savon naturel et hydratant avec un parfum de vétiver. Utilisez quotidiennement pour le nettoyage du corps et les bienfaits de l’aromathérapie.", iconKey: "soap" },
          { name: "Bâtons d’encens", desc: "Encens au vétiver pour la relaxation. Allumez pour créer une ambiance apaisante et aromatique.", iconKey: "incense_sticks" }
        ]
      },
      SoapBerries: {
        name: "Baies de savon",
        description: "Les baies de savon sont une alternative écologique aux nettoyants chimiques, utilisées pour la lessive et les soins capillaires.",
        items: [
          { name: "Baies entières", desc: "Utilisées comme détergent à lessive naturel. Placez-les dans un sac en tissu pour la lessive.", iconKey: "whole_berries" },
          { name: "Poudre", desc: "Agit comme un shampooing et nettoyant naturel. Mélangez avec de l'eau pour laver les cheveux.", iconKey: "powder" }
        ]
      },
      Kokum: {
        name: "Kokum",
        description: "Le kokum est un fruit tropical connu pour ses propriétés rafraîchissantes, utilisé en soins de la peau et en boissons estivales rafraîchissantes.",
        items: [
          { name: "Beurre", desc: "Hydratant naturel riche, extrait des graines de kokum. Appliquez sur la peau sèche pour une hydratation profonde.", iconKey: "butter" },
          { name: "Sirop", desc: "Boisson estivale rafraîchissante avec des propriétés rafraîchissantes. Mélangez avec de l'eau ou de la soda pour une boisson acidulée et rafraîchissante.", iconKey: "syrup" }
        ]
      },
      Neem: {
        name: "Neem",
        description: "Le neem est apprécié dans la médecine traditionnelle pour ses propriétés antibactériennes, utilisé en soins de la peau et en remèdes de santé.",
        items: [
          { name: "Poudre", desc: "Remède naturel pour la santé de la peau et des cheveux. Mélangez avec de l'eau pour faire une pâte ou ajoutez aux masques faciaux.", iconKey: "powder" },
          { name: "Savon", desc: "Savon doux et antibactérien pour les soins de la peau. À utiliser pour le nettoyage quotidien du corps.", iconKey: "soap" }
        ]
      },
      Amla: {
        name: "Amla",
        description: "L'amla, ou groseille indienne, est riche en vitamine C et est utilisée pour promouvoir la santé de la peau et renforcer l'immunité.",
        items: [
          { name: "Frais", desc: "Fruit frais d'amla, riche en vitamine C. À manger cru ou à transformer en jus pour un soutien immunitaire.", iconKey: "amla" },
          { name: "Séché", desc: "Amla séché pour une collation acidulée et saine. À ajouter aux thés ou à consommer tel quel.", iconKey: "dry" },
          { name: "Poudre", desc: "Poudre d'amla pour les soins de la peau et des cheveux. Mélangez avec de l'eau pour un masque naturel pour le visage ou les cheveux.", iconKey: "powder" }
        ]
      },
      Tulsi: {
        name: "Tulsi",
        description: "Le tulsi, ou basilic sacré, est réputé pour ses propriétés immunostimulantes et anti-stress.",
        items: [
          { name: "Poudre", desc: "Poudre de tulsi pour les soins de la peau et la santé. Mélangez avec de l'eau ou du miel pour un masque facial ou comme complément alimentaire.", iconKey: "powder" },
          { name: "Thé", desc: "Thé relaxant à base de feuilles de tulsi. Infusez dans de l'eau chaude pour une boisson rafraîchissante et anti-stress.", iconKey: "powder" }
        ]
      },
      Shatavari: {
        name: "Shatavari",
        description: "Le shatavari est une plante adaptogène réputée pour soutenir la santé des femmes et l'équilibre hormonal.",
        items: [
          { name: "Poudre", desc: "Poudre de shatavari, traditionnellement utilisée pour l'équilibre hormonal. Mélangez dans du lait ou des smoothies.", iconKey: "powder" },
          { name: "Extrait liquide", desc: "Extrait de shatavari pour une utilisation facile. Ajoutez quelques gouttes dans de l'eau pour un coup de pouce quotidien.", iconKey: "powder" }
        ]
      },
      Sandalwood: {
        name: "Bois de santal",
        description: "Le bois de santal est apprécié pour son parfum apaisant et ses bienfaits pour la peau, notamment pour apaiser la peau.",
        items: [
          { name: "Poudre", desc: "Poudre de bois de santal, idéale pour les masques faciaux et les soins de la peau. Mélangez avec de l'eau de rose pour un masque apaisant.", iconKey: "powder" },
          { name: "Huile", desc: "Huile essentielle de bois de santal avec un arôme apaisant. Diluez et appliquez sur la peau ou utilisez dans des diffuseurs.", iconKey: "oil" },
          { name: "Bâtons d’encens", desc: "Bâtons d’encens naturels au bois de santal pour une ambiance parfumée et apaisante.", iconKey: "incense_sticks" }
        ]
      },
      KasturiManjal: {
        name: "Kasturi Manjal",
        description: "Également connue sous le nom de curcuma sauvage, Kasturi Manjal est utilisée en soins de la peau pour ses propriétés éclaircissantes et antibactériennes.",
        items: [
          { name: "Poudre", desc: "Poudre de curcuma sauvage, douce pour la peau. Mélangez avec du yaourt ou du lait pour un masque éclaircissant.", iconKey: "powder" },
          { name: "Savon", desc: "Savon Kasturi Manjal pour un nettoyage naturel et un éclaircissement de la peau.", iconKey: "soap" }
        ]
      },
      Turmeric: {
        name: "Curcuma",
        description: "Le curcuma est largement connu pour ses bienfaits anti-inflammatoires et éclaircissants pour la peau.",
        items: [
          { name: "Poudre", desc: "Poudre de curcuma de haute qualité pour la cuisine et les soins de la peau. Ajoutez aux recettes ou dans les masques faciaux.", iconKey: "powder" },
          { name: "Mélange de lait doré", desc: "Un mélange réchauffant de curcuma et d'épices pour une boisson apaisante de lait doré.", iconKey: "powder" }
        ]
      },
      Rose: {
        name: "Rose",
        description: "L'eau de rose et les extraits de rose sont appréciés pour leur arôme floral et leurs effets apaisants en cosmétique et en cuisine.",
        items: [
          { name: "Eau de rose", desc: "Tonique naturel et rafraîchissant pour la peau. Appliquez sur la peau avec un coton ou ajoutez aux recettes.", iconKey: "rose_water" },
          { name: "Poudre", desc: "Ajout parfumé pour les plats culinaires et les soins de la peau. Mélangez dans des masques faciaux ou des desserts.", iconKey: "powder" },
          { name: "Marmelade", desc: "Délicieuse conserve parfumée à base de pétales de rose. À tartiner sur du pain ou à ajouter aux desserts.", iconKey: "marmalade" }
        ]
      }
    },    
    form: {
      heading: "Je veux en savoir plus",
      nameLabel: "Nom - comment souhaitez-vous que nous vous saluions :",
      emailLabel: "Email, pour que nous puissions vous envoyer des mises à jour et des offres :",
      personalMessageLabel: "Message personnel pour nous :",
      productLabel: "Ce qui vous intrigue :",
      countryLabel: "Pays",
      otherProducts: "Parlez-moi d'autres produits inhabituels et comment les utiliser.",
      preBooking: "Je suis intéressé par une pré-réservation.",
      submitButton: "Envoyer",
      cancelButton: "Annuler",
    },
    footer: {
      text: "© 2024 unusual natural products",
    },
    about: {
      introduction: "Nous sommes une petite famille de la région côtière du Maharashtra. La région autour de Ratnagiri est mondialement connue pour ses mangues Alphonso, noix de coco, jacquiers et noix de cajou. Nous cultivons et utilisons plusieurs de ces produits depuis des générations sur notre terrain d'environ 50 acres.",
      visit: "Vous êtes les bienvenus pour nous rendre visite !",
      cards: [
        { text: "Travailler dans la terre rouge. La mousson rend tout magnifique.", image: "farm_1.jpg" },
        { text: "Un jeune manguier.", image: "farm_2.jpg" },
        { text: "Un jeune cajou.", image: "farm_3.jpg" },
        { text: "Jacquiers.", image: "farm_4.jpg" },
        { text: "La ferme en été.", image: "farm_5.jpg" },
        { text: "Mangue Alphonso.", image: "farm_6.jpg" },
        { text: "Pomme de cajou.", image: "farm_7.jpg" },
        { text: "Mangues.", image: "farm_8.jpg" },
        { text: "Rôtir des noix de cajou à l'ancienne.", image: "farm_9.jpg" },
        { text: "Poivre noir.", image: "farm_11.jpg" },
        { text: "Arbres à noix de bétel.", image: "farm_12.jpg" },
        { text: "La fleur de bananier.", image: "farm_13.jpg" },
        { text: "L'arrière-cour.", image: "home_2.jpg" },
        { text: "L'arrière-cour.", image: "home_3.jpg" },
        { text: "La route du village.", image: "village_1.jpg" },
        { text: "C'est ici que nous vivons.", image: "home_1.jpg" }
      ],
      backToHome: "Retour à l'accueil",
      footer: "© 2024 unusual natural products",
    }
    
    
  }
};


