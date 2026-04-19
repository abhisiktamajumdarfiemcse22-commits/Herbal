const plants = [
{
  id: 'neem',
  scientificName: 'Azadirachta indica',
  commonNames: ['Neem'],
  images: ['/pictures/neem.jpg'],
  description: 'A powerful Ayurvedic herb known for its antibacterial, antifungal, and blood-purifying properties. Widely used for skin care and detoxification.',
  uses: [
    {
      condition: 'skin infections',
      traditionalUse: 'leaf paste applied on affected area',
      preparation: 'topical application'
    },
    {
      condition: 'acne',
      traditionalUse: 'neem water wash',
      preparation: 'topical rinse'
    }
  ],
  medicines: [
    'Neem oil',
    'Neem capsules',
    'Neem paste'
  ],
  areasFound: [
    'Indian subcontinent',
    'Southeast Asia',
    'Tropical regions'
  ],
  precautions: 'Avoid internal use during pregnancy. Excess consumption may cause toxicity.',
  tags: ['antimicrobial','skin','detox'],
  sketchfabEmbed: `
   <div class="sketchfab-embed-wrapper"> <iframe title="Neem Tree" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/03edef8009d942d3a3db6fa64cecbe56/embed"> </iframe> </div>
  `
},

{
  id: 'tulsi',
  scientificName: 'Ocimum tenuiflorum',
  commonNames: ['Tulsi','Holy Basil'],
  images: ['/pictures/tulsi.jpg'],
  description: 'Sacred Ayurvedic herb known for boosting immunity, supporting respiratory health, and reducing stress.',
  uses: [
    {
      condition: 'respiratory issues',
      traditionalUse: 'herbal tea for cough and cold',
      preparation: 'decoction'
    },
    {
      condition: 'stress',
      traditionalUse: 'leaf extract',
      preparation: 'oral consumption'
    }
  ],
  medicines: [
    'Tulsi tea',
    'Tulsi drops',
    'Tulsi capsules'
  ],
  areasFound: [
    'Indian subcontinent',
    'Tropical regions'
  ],
  precautions: 'Avoid excessive use during pregnancy. Consult a doctor if on medication.',
  tags: ['immunity','respiratory','adaptogen'],
  sketchfabEmbed: `
   <div class="sketchfab-embed-wrapper"> <iframe title="Tulsi (Osmium, Holy Basil) Tree - Game Ready" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/c604e8f52c234f2e9259d895fe028819/embed"> </iframe></div>
  `
},

{
  id: 'ashwagandha',
  scientificName: 'Withania somnifera',
  commonNames: ['Ashwagandha', 'Indian Ginseng'],
  images: ['/pictures/ashwagandha.jpg'],
  description: 'A well-known adaptogenic herb in Ayurveda that helps the body manage stress, improve strength, and support overall vitality.',
  uses: [
    {
      condition: 'stress and anxiety',
      traditionalUse: 'powder mixed with milk',
      preparation: 'oral consumption'
    },
    {
      condition: 'fatigue and weakness',
      traditionalUse: 'root extract tonic',
      preparation: 'oral consumption'
    }
  ],
  medicines: [
    'Ashwagandha powder',
    'Ashwagandha capsules',
    'Ashwagandha tonic'
  ],
  areasFound: [
    'India',
    'Middle East',
    'North Africa'
  ],
  precautions: 'Avoid use during pregnancy. Consult a doctor if taking thyroid or sedative medications.',
  tags: ['adaptogen','stress','energy'],
  sketchfabEmbed: `
    <div class="sketchfab-embed-wrapper"> <iframe title="ashwagandha" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/dd3b1060c1ac46b483d148caec2c1971/embed"> </iframe> </div>
  `
},

{
  id: 'amla',
  scientificName: 'Phyllanthus emblica',
  commonNames: ['Amla', 'Indian Gooseberry'],
  images: ['/pictures/amla.jpg'],
  description: 'A highly nutritious Ayurvedic fruit rich in vitamin C, known for boosting immunity, improving digestion, and promoting healthy skin and hair.',
  uses: [
    {
      condition: 'low immunity',
      traditionalUse: 'fresh juice or powder',
      preparation: 'oral consumption'
    },
    {
      condition: 'hair health',
      traditionalUse: 'oil infusion',
      preparation: 'topical application'
    }
  ],
  medicines: [
    'Amla juice',
    'Chyawanprash',
    'Amla powder'
  ],
  areasFound: [
    'India',
    'Southeast Asia'
  ],
  precautions: 'Excess consumption may cause acidity in some individuals.',
  tags: ['immunity','digestion','hair'],
sketchfabEmbed: `
 <div class="sketchfab-embed-wrapper"> <iframe title="Amla tree" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/db8b1c1c2e474fd7b58fd2951639bcb0/embed"> </iframe></div>
`
},

{
  id: 'giloy',
  scientificName: 'Tinospora cordifolia',
  commonNames: ['Giloy','Guduchi'],
  images: ['/pictures/giloy.jpg'],
  description: 'An important Ayurvedic herb known for boosting immunity and reducing fever.',
  uses: [
    {
      condition: 'fever',
      traditionalUse: 'stem decoction',
      preparation: 'oral consumption'
    }
  ],
  medicines: [
    'Giloy juice',
    'Giloy tablets'
  ],
  areasFound: [
    'India',
    'Tropical regions'
  ],
  precautions: 'Avoid excessive use; consult a doctor for long-term consumption.',
  tags: ['immunity','fever','detox'],
  sketchfabEmbed: `
   <div class="sketchfab-embed-wrapper"> <iframe title="giloy plant" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/78a94ae2a82e4f60aefd1ae553ed43d1/embed"> </iframe></div>
  `
},

{
  id: 'brahmi',
  scientificName: 'Bacopa monnieri',
  commonNames: ['Brahmi'],
  images: ['/pictures/brahmi.jpg'],
  description: 'A well-known Ayurvedic herb that enhances memory, improves concentration, and supports brain function.',
  uses: [
    {
      condition: 'memory loss',
      traditionalUse: 'herbal paste or extract',
      preparation: 'oral consumption'
    },
    {
      condition: 'anxiety',
      traditionalUse: 'leaf extract',
      preparation: 'oral consumption'
    }
  ],
  medicines: [
    'Brahmi syrup',
    'Brahmi capsules',
    'Brahmi powder'
  ],
  areasFound: [
    'India',
    'Wetlands',
    'Tropical regions'
  ],
  precautions: 'High doses may cause nausea or digestive discomfort.',
  tags: ['brain','memory','focus'],
  sketchfabEmbed: `
    <div class="sketchfab-embed-wrapper"> <iframe title="brahmi plant" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/24fc0ecfccc74f589ec4abe443514ba1/embed"> </iframe> </div>
  `
},

{
  id: 'shatavari',
  scientificName: 'Asparagus racemosus',
  commonNames: ['Shatavari'],
  images: ['/pictures/shatavari.jpg'],
  description: 'An important Ayurvedic herb known for supporting female reproductive health, hormonal balance, and overall vitality.',
  uses: [
    {
      condition: 'hormonal imbalance',
      traditionalUse: 'powder with milk',
      preparation: 'oral consumption'
    },
    {
      condition: 'low immunity',
      traditionalUse: 'root extract tonic',
      preparation: 'oral consumption'
    }
  ],
  medicines: [
    'Shatavari powder',
    'Shatavari tablets',
    'Shatavari syrup'
  ],
  areasFound: [
    'India',
    'Himalayan region',
    'Tropical Asia'
  ],
  precautions: 'Consult a doctor during pregnancy or if you have hormone-sensitive conditions.',
  tags: ['hormonal','women','immunity'],
  sketchfabEmbed: `
   <div class="sketchfab-embed-wrapper"> <iframe title="Asparagus" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/772422b1fdc54b5aafdec653c2821da5/embed"> </iframe></div>
  `
},

{
  id: 'aloevera',
  scientificName: 'Aloe barbadensis miller',
  commonNames: ['Aloe Vera'],
  images: ['/pictures/aloevera.jpg'],
  description: 'A succulent medicinal plant widely used for skin healing, burns, and digestion support.',
  uses: [
    {
      condition: 'burns and skin irritation',
      traditionalUse: 'fresh gel applied',
      preparation: 'topical application'
    },
    {
      condition: 'digestive issues',
      traditionalUse: 'juice extract',
      preparation: 'oral consumption'
    }
  ],
  medicines: [
    'Aloe vera gel',
    'Aloe vera juice',
    'Aloe vera capsules'
  ],
  areasFound: [
    'Africa',
    'India',
    'Tropical regions'
  ],
  precautions: 'Avoid excessive internal use; may cause digestive discomfort.',
  tags: ['skin','healing','digestion'],
  sketchfabEmbed: '<div class="sketchfab-embed-wrapper"> <iframe title="Aloe Vera 3D Model" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/780af4156a39434599354bd37c542669/embed"> </iframe></div>'   
},

{
  id: 'turmeric',
  scientificName: 'Curcuma longa',
  commonNames: ['Turmeric','Haldi'],
  images: ['/pictures/turmeric.jpg'],
  description: 'A powerful anti-inflammatory Ayurvedic herb widely used for healing, immunity, and skin care.',
  uses: [
    {
      condition: 'inflammation',
      traditionalUse: 'turmeric milk (haldi doodh)',
      preparation: 'oral consumption'
    },
    {
      condition: 'wounds and skin issues',
      traditionalUse: 'turmeric paste',
      preparation: 'topical application'
    }
  ],
  medicines: [
    'Turmeric powder',
    'Curcumin capsules',
    'Turmeric milk'
  ],
  areasFound: [
    'India',
    'Southeast Asia'
  ],
  precautions: 'Avoid excessive intake; consult doctor if you have gallbladder issues.',
  tags: ['anti-inflammatory','healing','immunity'],
  sketchfabEmbed: '<div class="sketchfab-embed-wrapper"> <iframe title="Turmeric - Curcuma longa" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/05f6febc74134387901d7bb5aa8d2ffb/embed"> </iframe> </div>'   
},

{
  id: 'bhringraj',
  scientificName: 'Eclipta alba',
  commonNames: ['Bhringraj'],
  images: ['/pictures/bhringraj.jpg'],
  description: 'A traditional Ayurvedic herb known for promoting hair growth, improving scalp health, and supporting liver function.',
  uses: [
    {
      condition: 'hair fall',
      traditionalUse: 'herbal oil massage',
      preparation: 'topical application'
    },
    {
      condition: 'liver health',
      traditionalUse: 'leaf extract',
      preparation: 'oral consumption'
    }
  ],
  medicines: [
    'Bhringraj oil',
    'Bhringraj powder',
    'Bhringraj capsules'
  ],
  areasFound: [
    'India',
    'Tropical regions',
    'Wetlands'
  ],
  precautions: 'May cause mild stomach upset if taken in excess.',
  tags: ['hair','liver','healing'],
  sketchfabEmbed: '<div class="sketchfab-embed-wrapper"> <iframe title="Daisy" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/bb3f6ca7d00a489b9a356fb88f011565/embed"> </iframe></div>' 
},

{
  id: 'manjistha',
  scientificName: 'Rubia cordifolia',
  commonNames: ['Manjistha', 'Indian Madder'],
  images: ['/pictures/manjistha.jpg'],
  description: 'A powerful Ayurvedic herb known for blood purification and improving skin health.',
  uses: [
    {
      condition: 'skin disorders',
      traditionalUse: 'herbal powder or decoction',
      preparation: 'oral consumption'
    },
    {
      condition: 'blood purification',
      traditionalUse: 'root extract',
      preparation: 'oral consumption'
    }
  ],
  medicines: [
    'Manjistha powder',
    'Manjistha capsules',
    'Herbal decoction'
  ],
  areasFound: [
    'India',
    'Himalayan region',
    'Asia'
  ],
  precautions: 'Avoid during pregnancy; excessive use may cause stomach discomfort.',
  tags: ['blood','skin','detox'],
  sketchfabEmbed: '<div class="sketchfab-embed-wrapper"> <iframe title="Plant - Outdoors" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/7e30a1e229a4411d8d3ee659d3ff5747/embed"> </iframe></div>'   
},

{
  id: 'arjuna',
  scientificName: 'Terminalia arjuna',
  commonNames: ['Arjuna'],
  images: ['/pictures/arjuna.jpg'],
  description: 'An important Ayurvedic tree known for supporting heart health and improving circulation.',
  uses: [
    {
      condition: 'heart health',
      traditionalUse: 'bark decoction',
      preparation: 'oral consumption'
    },
    {
      condition: 'blood pressure',
      traditionalUse: 'herbal powder',
      preparation: 'oral consumption'
    }
  ],
  medicines: [
    'Arjuna powder',
    'Arjuna capsules',
    'Arjuna bark decoction'
  ],
  areasFound: [
    'India',
    'South Asia',
    'Riverbanks and forests'
  ],
  precautions: 'Consult a doctor for long-term use or if you have heart conditions.',
  tags: ['heart','cardio','circulation'],
  sketchfabEmbed: '<div class="sketchfab-embed-wrapper"> <iframe title="arjuna tree" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/d4c38c33f18f4ff5bbfebb572bb13773/embed"> </iframe></div>'  
},

{
  id: 'kalmegh',
  scientificName: 'Andrographis paniculata',
  commonNames: ['Kalmegh', 'King of Bitters'],
  images: ['/pictures/kalmegh.jpg'],
  description: 'A highly bitter Ayurvedic herb known for liver detoxification, improving immunity, and fighting infections.',
  uses: [
    {
      condition: 'liver disorders',
      traditionalUse: 'decoction from leaves',
      preparation: 'oral consumption'
    },
    {
      condition: 'fever and infections',
      traditionalUse: 'herbal extract',
      preparation: 'oral consumption'
    }
  ],
  medicines: [
    'Kalmegh tablets',
    'Kalmegh extract',
    'Herbal decoction'
  ],
  areasFound: [
    'India',
    'Sri Lanka',
    'Tropical Asia'
  ],
  precautions: 'Very bitter; excessive use may cause stomach discomfort or loss of appetite.',
  tags: ['liver','detox','immunity'],
  sketchfabEmbed: '<div class="sketchfab-embed-wrapper"> <iframe title="Green Creeper Plant" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/f1005205b134402db0a1c986b15c803d/embed"> </iframe></div>'  
},

{
  id: 'haritaki',
  scientificName: 'Terminalia chebula',
  commonNames: ['Haritaki'],
  images: ['/pictures/haritaki.jpg'],
  description: 'A powerful Ayurvedic fruit known for improving digestion, detoxifying the body, and promoting overall health. It is one of the three ingredients of Triphala.',
  uses: [
    {
      condition: 'constipation',
      traditionalUse: 'powder with warm water',
      preparation: 'oral consumption'
    },
    {
      condition: 'detoxification',
      traditionalUse: 'herbal powder',
      preparation: 'oral consumption'
    }
  ],
  medicines: [
    'Haritaki powder',
    'Triphala',
    'Herbal capsules'
  ],
  areasFound: [
    'India',
    'South Asia',
    'Forests'
  ],
  precautions: 'Avoid during dehydration or severe weakness; use in moderation.',
  tags: ['digestion','detox','gut'],
  sketchfabEmbed: '<div class="sketchfab-embed-wrapper"> <iframe title="Cacao Tree(Green Fruit)- 02" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/00002975f61942eaaa0293dc1277be4f/embed"> </iframe> </div>'  
},

{
  id: 'bibhitaki',
  scientificName: 'Terminalia bellirica',
  commonNames: ['Bibhitaki'],
  images: ['/pictures/bibhitaki.jpg'],
  description: 'An important Ayurvedic fruit known for supporting respiratory health, digestion, and detoxification. It is one of the three ingredients of Triphala.',
  uses: [
    {
      condition: 'cough and respiratory issues',
      traditionalUse: 'powder with honey',
      preparation: 'oral consumption'
    },
    {
      condition: 'digestive problems',
      traditionalUse: 'herbal powder',
      preparation: 'oral consumption'
    }
  ],
  medicines: [
    'Bibhitaki powder',
    'Triphala',
    'Herbal capsules'
  ],
  areasFound: [
    'India',
    'South Asia',
    'Forests'
  ],
  precautions: 'Use in moderation; excessive intake may cause dryness.',
  tags: ['respiratory','digestion','detox'],
sketchfabEmbed: `
  <div class="sketchfab-embed-wrapper">
    <iframe
      title="Bibhitaki Tree"
      frameborder="0"
      allowfullscreen
      allow="autoplay; fullscreen; xr-spatial-tracking"
      src="https://sketchfab.com/models/8afce4009d1641999de8437abfd093e1/embed?ui_infos=0&ui_controls=0&ui_watermark=0&ui_watermark_link=0">
    </iframe>
  </div>
`
}]

export default plants