const plants = [
  {
    id: 'tulsi',
    scientificName: 'Ocimum tenuiflorum',
    commonNames: ['Tulsi','Holy Basil'],
    family: 'Lamiaceae',
    images: ['/pictures/tulsi.jpg'],
    description: 'Traditional Ayurvedic herb used for respiratory and immune support.',
    uses: [{ condition: 'respiratory issues', traditionalUse: 'infusion for cough and cold', preparation: 'decoction' }],
    medicines: ['Tulsi tea (infusion)','Tulsi syrup (for cough)'],
    areasFound: ['Indian subcontinent','Tropical and subtropical regions'],
    precautions: 'Avoid in pregnancy without medical advice.',
    tags: ['respiratory','immunity','adaptogen'],
    sketchfabEmbed: `
      <div class="sketchfab-embed-wrapper"> <iframe title="Tulsi (Osmium, Holy Basil) Tree - Game Ready" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/c604e8f52c234f2e9259d895fe028819/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/tulsi-osmium-holy-basil-tree-game-ready-c604e8f52c234f2e9259d895fe028819?utm_medium=embed&utm_campaign=share-popup&utm_content=c604e8f52c234f2e9259d895fe028819" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Tulsi (Osmium, Holy Basil) Tree - Game Ready </a> by <a href="https://sketchfab.com/hookstar1993?utm_medium=embed&utm_campaign=share-popup&utm_content=c604e8f52c234f2e9259d895fe028819" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> HØØK言STAR </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=c604e8f52c234f2e9259d895fe028819" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
    `
  },
  {
    id: 'neem',
    scientificName: 'Azadirachta indica',
    commonNames: ['Neem'],
    family: 'Meliaceae',
    images: ['/pictures/neem.jpg'],
    description: 'Antimicrobial and skin-supporting herb.',
  uses: [{ condition: 'skin infections', traditionalUse: 'paste', preparation: 'topical application' }],
    medicines: ['Neem paste (topical)','Neem oil (topical)'],
    areasFound: ['Indian subcontinent','Southeast Asia'],
    precautions: 'Not for internal use during pregnancy.',
    tags: ['antimicrobial','skin'],
    sketchfabEmbed: `
      <div class="sketchfab-embed-wrapper"> <iframe title="Neem Tree" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/03edef8009d942d3a3db6fa64cecbe56/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/neem-tree-03edef8009d942d3a3db6fa64cecbe56?utm_medium=embed&utm_campaign=share-popup&utm_content=03edef8009d942d3a3db6fa64cecbe56" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Neem Tree </a> by <a href="https://sketchfab.com/rohit8999?utm_medium=embed&utm_campaign=share-popup&utm_content=03edef8009d942d3a3db6fa64cecbe56" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Rohit Pawar </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=03edef8009d942d3a3db6fa64cecbe56" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
    `
  },
  {
    id: 'ashwagandha',
    scientificName: 'Withania somnifera',
    commonNames: ['Ashwagandha'],
    family: 'Solanaceae',
    images: ['/pictures/ashwagandha.jpg'],
    description: 'Rasayana; supports stress resilience.',
    uses: [{ condition: 'stress', traditionalUse: 'tonic', preparation: 'powder/decoction' }],
    medicines: ['Ashwagandha powder (rasayana)','Ashwagandha capsules (standardized extract)'],
    areasFound: ['India','West Asia','North Africa'],
    precautions: 'Use caution with thyroid medication.',
    tags: ['adaptogen','stress'],
    sketchfabEmbed: `
      <div class="sketchfab-embed-wrapper"> <iframe title="Ashwagandha" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/c6876e8e2fc44ca8a56342d3cc67febf/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/ashwagandha-c6876e8e2fc44ca8a56342d3cc67febf?utm_medium=embed&utm_campaign=share-popup&utm_content=c6876e8e2fc44ca8a56342d3cc67febf" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> Ashwagandha </a> by <a href="https://sketchfab.com/227y1a3306?utm_medium=embed&utm_campaign=share-popup&utm_content=c6876e8e2fc44ca8a56342d3cc67febf" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> 227y1a3306 </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=c6876e8e2fc44ca8a56342d3cc67febf" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>
    `
  }
]

export default plants
