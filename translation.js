const translationData = {
  en: {
    intro: {
      title: "unusual",
      subtitle: "natural products",
      line1:"We are doing a little market research before going live. It is not a typical survey. It's more personal than that!",
      line2:" We want to hear your thoughts and impressions about these perhaps not-so-wellknown unusual products.",
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
      Rose: {
        name: "Rose",
        description: "Rose water and extracts are cherished for their floral aroma and soothing effects in beauty and culinary uses.",
        items: [
          { name: "Rose Water", desc: "Natural toner and skin refresher. Apply to skin with a cotton pad or add to recipes.", iconKey: "rose_water" },
          { name: "Powder", desc: "Fragrant addition to culinary dishes and skincare. Mix into face masks or desserts.", iconKey: "powder" },
          { name: "Marmalade", desc: "Delicious, fragrant preserve made from rose petals. Spread on toast or add to desserts.", iconKey: "marmalade" }
        ]
      },
      Neem: {
        name: "Neem",
        description: "Neem is valued in traditional medicine for its antibacterial properties, used in skincare and health remedies.",
        items: [
          { name: "Leaves", desc: "Traditionally used for skin health and immunity. Use in baths or make into a paste for skin.", iconKey: "leaves" },
          { name: "Powder", desc: "Natural remedy for skin and hair health. Mix with water to make a paste or add to face masks.", iconKey: "powder" },
          { name: "Oil", desc: "Neem oil with antibacterial properties. Apply to skin for moisturizing and healing.", iconKey: "oil" },
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
          { name: "Oil", desc: "Amla oil for hair health. Massage into scalp for stronger, healthier hair.", iconKey: "oil" }
        ]
      },
      Tulsi: {
        name: "Tulsi",
        description: "Tulsi, or Holy Basil, is revered for its immune-boosting and stress-relieving properties.",
        items: [
          { name: "Leaves", desc: "Dried Tulsi leaves for tea and aromatherapy. Brew to enjoy a calming and immune-boosting tea.", iconKey: "leaves" },
          { name: "Powder", desc: "Tulsi powder for skincare and health. Mix with water or honey for a face pack or take as a supplement.", iconKey: "powder" },
          { name: "Oil", desc: "Tulsi essential oil with soothing properties. Use for aromatherapy or dilute and apply to the skin.", iconKey: "oil" },
          { name: "Tea", desc: "Relaxing herbal tea made from Tulsi leaves. Brew in hot water for a refreshing, stress-relieving drink.", iconKey: "powder" }
        ]
      },
      Shatavari: {
        name: "Shatavari",
        description: "Shatavari is an adaptogenic herb known for supporting women’s health and hormonal balance.",
        items: [
          { name: "Powder", desc: "Shatavari powder, traditionally used for hormonal balance. Mix into milk or smoothies.", iconKey: "powder" },
          { name: "Capsules", desc: "Shatavari in convenient capsule form for daily health support.", iconKey: "powder" },
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
          { name: "Scrub", desc: "Exfoliating scrub with wild turmeric for glowing skin. Apply to damp skin and gently scrub.", iconKey: "scrub" }
        ]
      },
      Turmeric: {
        name: "Turmeric",
        description: "Turmeric is widely known for its anti-inflammatory and skin-brightening benefits.",
        items: [
          { name: "Powder", desc: "High-quality turmeric powder for culinary and skincare use. Add to recipes or mix into face masks.", iconKey: "powder" },
          { name: "Capsules", desc: "Turmeric capsules for health support. Take daily for anti-inflammatory benefits.", iconKey: "powder" },
          { name: "Golden Milk Mix", desc: "A warming blend of turmeric and spices for a soothing golden milk drink.", iconKey: "powder" }
        ]
      }
    },
    form: {
      heading: "I want to know more",
      nameLabel: "Name- how would you like us to greet you:",
      emailLabel: "Email, so that we can send you updates and offers:",
      personalMessageLabel: "Personal message to us:",
      productLabel: "What intrigues you:",
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
          { name: "Wurzeln", desc: "Vetiver-Wurzeln sind aromatisch und natürlich kühlend. Verwenden Sie sie in Beuteln oder Kühlmatten für natürlichen Duft.", iconKey: "roots" },
          { name: "Pulver", desc: "Beliebt in der Hautpflege und natürlichen Parfümerie. Fügen Sie es zu Gesichtsmasken für einen beruhigenden, duftenden Effekt hinzu.", iconKey: "powder" },
          { name: "Öl", desc: "Vetiver-Ätherisches Öl mit einem beruhigenden Aroma. Diffundieren Sie ein paar Tropfen, um eine entspannende Atmosphäre zu schaffen.", iconKey: "oil" },
          { name: "Peeling", desc: "Peeling mit erfrischenden Eigenschaften. Auf die feuchte Haut auftragen und sanft einmassieren.", iconKey: "scrub" },
          { name: "Seife", desc: "Natürliche, feuchtigkeitsspendende Seife mit Vetiver-Duft. Tägliche Reinigung für Körperpflege und Aromatherapie.", iconKey: "soap" },
          { name: "Räucherstäbchen", desc: "Mit Vetiver angereicherte Räucherstäbchen für Entspannung. Anzünden für ein beruhigendes, aromatisches Ambiente.", iconKey: "incense_sticks" }
        ]
      },
      SoapBerries: {
        name: "Seifenbeeren",
        description: "Natürliche Seifenbeeren sind eine umweltfreundliche Alternative zu chemischen Reinigern und werden für Wäsche und Haarpflege verwendet.",
        items: [
          { name: "Ganze Beeren", desc: "Für natürliches Waschmittel verwenden. In einen Stoffbeutel geben für die Wäsche.", iconKey: "whole_berries" },
          { name: "Pulver", desc: "Wirkt als natürliches Shampoo und Reiniger. Mit Wasser für eine Haarwäsche mischen.", iconKey: "powder" }
        ]
      },
      Kokum: {
        name: "Kokum",
        description: "Kokum ist eine tropische Frucht, bekannt für ihre kühlenden Eigenschaften und wird in der Hautpflege und erfrischenden Sommergetränken verwendet.",
        items: [
          { name: "Butter", desc: "Reichhaltige, natürliche Feuchtigkeitscreme aus Kokumkernen. Auf trockene Haut auftragen für tiefe Hydratation.", iconKey: "butter" },
          { name: "Sirup", desc: "Erfrischendes Sommergetränk mit kühlenden Eigenschaften. Mit Wasser oder Soda mischen für ein spritziges, erfrischendes Getränk.", iconKey: "syrup" }
        ]
      },
      Rose: {
        name: "Rose",
        description: "Rosenwasser und Extrakte werden für ihr blumiges Aroma und ihre beruhigenden Wirkungen in der Schönheits- und Lebensmittelbranche geschätzt.",
        items: [
          { name: "Rosenwasser", desc: "Natürlicher Toner und Hautauffrischer. Mit einem Wattepad auf die Haut auftragen oder zu Rezepten hinzufügen.", iconKey: "rose_water" },
          { name: "Pulver", desc: "Duftender Zusatz für kulinarische Gerichte und Hautpflege. In Gesichtsmasken oder Desserts einrühren.", iconKey: "powder" },
          { name: "Marmelade", desc: "Köstliche, duftende Konfitüre aus Rosenblättern. Auf Toast streichen oder zu Desserts hinzufügen.", iconKey: "marmalade" }
        ]
      },
      Neem: {
        name: "Neem",
        description: "Neem ist in der traditionellen Medizin wegen seiner antibakteriellen Eigenschaften geschätzt und wird in der Hautpflege und Gesundheitsbehandlungen verwendet.",
        items: [
          { name: "Blätter", desc: "Traditionell verwendet für Hautgesundheit und Immunität. Für Bäder oder als Paste für die Haut verwenden.", iconKey: "leaves" },
          { name: "Pulver", desc: "Natürliches Mittel für Haut- und Haarpflege. Mit Wasser zu einer Paste mischen oder in Gesichtsmasken hinzufügen.", iconKey: "powder" },
          { name: "Öl", desc: "Neem-Öl mit antibakteriellen Eigenschaften. Auf die Haut auftragen für Feuchtigkeit und Heilung.", iconKey: "oil" },
          { name: "Seife", desc: "Sanfte, antibakterielle Seife zur Hautpflege. Tägliche Anwendung für Körperreinigung.", iconKey: "soap" }
        ]
      },
      Amla: {
        name: "Amla",
        description: "Amla, oder indische Stachelbeere, ist reich an Vitamin C und wird zur Förderung der Hautgesundheit und Immunität verwendet.",
        items: [
          { name: "Roh", desc: "Frische Amla-Frucht, reich an Vitamin C. Roh essen oder Saft zur Stärkung des Immunsystems.", iconKey: "amla" },
          { name: "Getrocknet", desc: "Getrocknete Amla als herzhafter, gesunder Snack. Zu Tees hinzufügen oder pur essen.", iconKey: "dry" },
          { name: "Pulver", desc: "Amla-Pulver für Haut- und Haarpflege. Mit Wasser mischen für eine natürliche Gesichts- oder Haarkur.", iconKey: "powder" },
          { name: "Öl", desc: "Amla-Öl für Haarpflege. In die Kopfhaut einmassieren für stärkeres, gesünderes Haar.", iconKey: "oil" }
        ]
      },
      Tulsi: {
        name: "Tulsi",
        description: "Tulsi, auch bekannt als Heiliges Basilikum, ist bekannt für seine immunstärkenden und stresslindernden Eigenschaften.",
        items: [
          { name: "Blätter", desc: "Getrocknete Tulsi-Blätter für Tee und Aromatherapie. Aufbrühen, um einen beruhigenden und immunstärkenden Tee zu genießen.", iconKey: "leaves" },
          { name: "Pulver", desc: "Tulsi-Pulver für Hautpflege und Gesundheit. Mit Wasser oder Honig für eine Gesichtsmaske oder als Nahrungsergänzung mischen.", iconKey: "powder" },
          { name: "Öl", desc: "Tulsi-Öl mit beruhigenden Eigenschaften. Für Aromatherapie verwenden oder verdünnt auf die Haut auftragen.", iconKey: "oil" },
          { name: "Tee", desc: "Entspannender Kräutertee aus Tulsi-Blättern. In heißem Wasser aufbrühen für ein erfrischendes, stresslinderndes Getränk.", iconKey: "powder" }
        ]
      },
      Shatavari: {
        name: "Shatavari",
        description: "Shatavari ist ein adaptogenes Kraut, das für die Unterstützung der Frauengesundheit und des Hormonhaushalts bekannt ist.",
        items: [
          { name: "Pulver", desc: "Shatavari-Pulver, traditionell zur Unterstützung des Hormonhaushalts. In Milch oder Smoothies mischen.", iconKey: "powder" },
          { name: "Kapseln", desc: "Shatavari in praktischer Kapselform zur täglichen Unterstützung der Gesundheit.", iconKey: "powder" },
          { name: "Flüssigextrakt", desc: "Shatavari-Extrakt für einfache Anwendung. Einige Tropfen ins Wasser geben für einen täglichen Gesundheitsschub.", iconKey: "powder" }
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
        description: "Auch bekannt als wilde Kurkuma, wird Kasturi Manjal in der Hautpflege wegen seiner aufhellenden und antibakteriellen Eigenschaften verwendet.",
        items: [
          { name: "Pulver", desc: "Wilde Kurkuma-Pulver, sanft zur Haut. Mit Joghurt oder Milch für eine aufhellende Gesichtsmaske mischen.", iconKey: "powder" },
          { name: "Seife", desc: "Kasturi Manjal Seife für eine natürliche Hautreinigung und Aufhellung.", iconKey: "soap" },
          { name: "Peeling", desc: "Peeling mit wilder Kurkuma für strahlende Haut. Auf feuchte Haut auftragen und sanft peelen.", iconKey: "scrub" }
        ]
      },
      turmeric: {
        name: "Kurkuma",
        description: "Kurkuma ist bekannt für seine entzündungshemmenden und hautaufhellenden Vorteile.",
        items: [
          { name: "Pulver", desc: "Hochwertiges Kurkumapulver für den kulinarischen und hautpflegenden Gebrauch. In Rezepte einfügen oder in Gesichtsmasken mischen.", iconKey: "powder" },
          { name: "Kapseln", desc: "Kurkuma-Kapseln zur Unterstützung der Gesundheit. Täglich zur Entzündungshemmung einnehmen.", iconKey: "powder" },
          { name: "Golden Milk Mischung", desc: "Eine wärmende Mischung aus Kurkuma und Gewürzen für ein beruhigendes Golden-Milk-Getränk.", iconKey: "powder" }
        ]
      }
    },    
    form: {
      heading: "Ich möchte mehr erfahren",
      nameLabel: "Name - wie sollen wir Sie ansprechen:",
      emailLabel: "E-Mail, damit wir Ihnen Updates und Angebote senden können:",
      personalMessageLabel: "Persönliche Nachricht an uns:",
      productLabel: "Was weckt Ihr Interesse:",
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
          { name: "Racines", desc: "Les racines de vétiver sont aromatiques et naturellement rafraîchissantes. À utiliser dans des sachets ou des tapis de refroidissement pour un parfum naturel.", iconKey: "roots" },
          { name: "Poudre", desc: "Populaire dans les soins de la peau et la parfumerie naturelle. Ajouter aux masques pour un effet apaisant et parfumé.", iconKey: "powder" },
          { name: "Huile", desc: "Huile essentielle de vétiver avec un arôme apaisant. Diffusez quelques gouttes pour créer une atmosphère relaxante.", iconKey: "oil" },
          { name: "Gommage", desc: "Gommage exfoliant avec des propriétés rafraîchissantes. Appliquer sur peau humide et exfolier doucement.", iconKey: "scrub" },
          { name: "Savon", desc: "Savon naturel et hydratant au parfum de vétiver. À utiliser quotidiennement pour les bienfaits de l'aromathérapie.", iconKey: "soap" },
          { name: "Bâtons d'encens", desc: "Encens infusé au vétiver pour la relaxation. Allumer pour créer une ambiance aromatique apaisante.", iconKey: "incense_sticks" }
        ]
      },
      SoapBerries: {
        name: "Baies de savon",
        description: "Les baies de savon naturelles sont une alternative écologique aux nettoyants chimiques, utilisées pour la lessive et les soins capillaires.",
        items: [
          { name: "Baies Entières", desc: "Utilisées comme détergent naturel pour le linge. Placer dans un sac en tissu pour la lessive.", iconKey: "whole_berries" },
          { name: "Poudre", desc: "Agit comme un shampooing et nettoyant naturel. Mélanger avec de l'eau pour laver les cheveux.", iconKey: "powder" }
        ]
      },
      Kokum: {
        name: "Kokum",
        description: "Le kokum est un fruit tropical connu pour ses propriétés rafraîchissantes, utilisé dans les soins de la peau et les boissons estivales.",
        items: [
          { name: "Beurre", desc: "Hydratant naturel riche à base de graines de kokum. Appliquer sur peau sèche pour une hydratation profonde.", iconKey: "butter" },
          { name: "Sirop", desc: "Boisson estivale rafraîchissante aux propriétés rafraîchissantes. Mélanger avec de l'eau ou du soda pour une boisson acidulée.", iconKey: "syrup" }
        ]
      },
      Rose: {
        name: "Rose",
        description: "L'eau de rose et les extraits sont appréciés pour leur arôme floral et leurs effets apaisants en beauté et en cuisine.",
        items: [
          { name: "Eau de Rose", desc: "Tonique naturel et rafraîchissant pour la peau. Appliquer avec un coton ou ajouter aux recettes.", iconKey: "rose_water" },
          { name: "Poudre", desc: "Ajout parfumé pour les plats culinaires et les soins de la peau. Mélanger dans les masques ou les desserts.", iconKey: "powder" },
          { name: "Marmelade", desc: "Délicieuse conserve parfumée à base de pétales de rose. Tartiner sur du pain grillé ou ajouter aux desserts.", iconKey: "marmalade" }
        ]
      },
      Neem: {
        name: "Neem",
        description: "Le neem est apprécié dans la médecine traditionnelle pour ses propriétés antibactériennes, utilisé dans les soins de la peau et les remèdes de santé.",
        items: [
          { name: "Feuilles", desc: "Traditionnellement utilisé pour la santé de la peau et l'immunité. À utiliser dans les bains ou à préparer en pâte pour la peau.", iconKey: "leaves" },
          { name: "Poudre", desc: "Remède naturel pour la santé de la peau et des cheveux. Mélanger avec de l'eau pour en faire une pâte ou ajouter aux masques.", iconKey: "powder" },
          { name: "Huile", desc: "Huile de neem aux propriétés antibactériennes. Appliquer sur la peau pour hydrater et guérir.", iconKey: "oil" },
          { name: "Savon", desc: "Savon doux et antibactérien pour le soin de la peau. Utilisation quotidienne pour le nettoyage du corps.", iconKey: "soap" }
        ]
      },
      Amla: {
        name: "Amla",
        description: "L'amla, ou groseille indienne, est riche en vitamine C et est utilisée pour promouvoir la santé de la peau et renforcer l'immunité.",
        items: [
          { name: "Cru", desc: "Fruit frais d'amla, riche en vitamine C. Manger cru ou en jus pour le soutien immunitaire.", iconKey: "amla" },
          { name: "Séchée", desc: "Amla séché, une collation acidulée et saine. Ajouter aux tisanes ou manger tel quel.", iconKey: "dry" },
          { name: "Poudre", desc: "Poudre d'amla pour les soins de la peau et des cheveux. Mélanger avec de l'eau pour un masque naturel.", iconKey: "powder" },
          { name: "Huile", desc: "Huile d'amla pour la santé des cheveux. Masser dans le cuir chevelu pour des cheveux plus forts et plus sains.", iconKey: "oil" }
        ]
      },
      Tulsi: {
        name: "Tulsi",
        description: "Le Tulsi, ou Basilic Sacré, est connu pour ses propriétés immunostimulantes et anti-stress.",
        items: [
          { name: "Feuilles", desc: "Feuilles séchées de Tulsi pour le thé et l'aromathérapie. Infusez pour profiter d'un thé apaisant et stimulant pour le système immunitaire.", iconKey: "leaves" },
          { name: "Poudre", desc: "Poudre de Tulsi pour les soins de la peau et la santé. Mélangez avec de l'eau ou du miel pour un masque facial ou utilisez comme complément alimentaire.", iconKey: "powder" },
          { name: "Huile", desc: "Huile essentielle de Tulsi aux propriétés apaisantes. Utilisez pour l'aromathérapie ou diluez et appliquez sur la peau.", iconKey: "oil" },
          { name: "Thé", desc: "Thé aux herbes relaxant fait de feuilles de Tulsi. Infusez dans de l'eau chaude pour une boisson rafraîchissante et anti-stress.", iconKey: "tea" }
        ]
      },
      Shatavari: {
        name: "Shatavari",
        description: "Le Shatavari est une plante adaptogène réputée pour soutenir la santé des femmes et l'équilibre hormonal.",
        items: [
          { name: "Poudre", desc: "Poudre de Shatavari, traditionnellement utilisée pour l'équilibre hormonal. À mélanger dans du lait ou des smoothies.", iconKey: "powder" },
          { name: "Capsules", desc: "Shatavari en forme de capsules pratiques pour un soutien quotidien de la santé.", iconKey: "capsules" },
          { name: "Extrait Liquide", desc: "Extrait de Shatavari pour une utilisation facile. Ajoutez quelques gouttes dans de l'eau pour un coup de pouce quotidien.", iconKey: "liquid_extract" }
        ]
      },
      Sandalwood: {
        name: "Bois de Santal",
        description: "Le bois de santal est apprécié pour son parfum apaisant et ses bienfaits pour la peau, notamment pour calmer la peau.",
        items: [
          { name: "Poudre", desc: "Poudre de bois de santal, idéale pour les masques faciaux et les soins de la peau. Mélangez avec de l'eau de rose pour un masque apaisant.", iconKey: "powder" },
          { name: "Huile", desc: "Huile essentielle de bois de santal avec un parfum apaisant. Diluez et appliquez sur la peau ou utilisez dans des diffuseurs.", iconKey: "oil" },
          { name: "Bâtons d'encens", desc: "Bâtons d'encens naturels au bois de santal pour une ambiance parfumée et apaisante.", iconKey: "incense_sticks" }
        ]
      },
      KasturiManjal: {
        name: "Kasturi Manjal",
        description: "Également connue sous le nom de curcuma sauvage, Kasturi Manjal est utilisée dans les soins de la peau pour ses propriétés éclaircissantes et antibactériennes.",
        items: [
          { name: "Poudre", desc: "Poudre de curcuma sauvage, douce pour la peau. Mélangez avec du yaourt ou du lait pour un masque éclatant.", iconKey: "powder" },
          { name: "Savon", desc: "Savon Kasturi Manjal pour un nettoyage naturel et un éclaircissement de la peau.", iconKey: "soap" },
          { name: "Gommage", desc: "Gommage exfoliant au curcuma sauvage pour une peau éclatante. Appliquez sur peau humide et exfoliez doucement.", iconKey: "scrub" }
        ]
      },
      turmeric: {
        name: "Curcuma",
        description: "Le curcuma est largement connu pour ses bienfaits anti-inflammatoires et éclaircissants pour la peau.",
        items: [
          { name: "Poudre", desc: "Poudre de curcuma de haute qualité pour un usage culinaire et pour les soins de la peau. Ajoutez aux recettes ou mélangez dans des masques faciaux.", iconKey: "powder" },
          { name: "Capsules", desc: "Capsules de curcuma pour le soutien de la santé. Prenez quotidiennement pour ses effets anti-inflammatoires.", iconKey: "powder" },
          { name: "Mélange de Lait d'Or", desc: "Un mélange réconfortant de curcuma et d'épices pour une boisson au lait d'or apaisante.", iconKey: "powder" }
        ]
      }
    },    
    form: {
      heading: "Je veux en savoir plus",
      nameLabel: "Nom - comment souhaitez-vous que nous vous saluions :",
      emailLabel: "Email, pour que nous puissions vous envoyer des mises à jour et des offres :",
      personalMessageLabel: "Message personnel pour nous :",
      productLabel: "Ce qui vous intrigue :",
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


