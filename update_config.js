const fs = require('fs');
const yaml = require('js-yaml');

let doc = yaml.load(fs.readFileSync('admin/config.yml', 'utf8'));
const siteSettings = doc.collections.find(c => c.name === 'site');

// 1. Hero
const hero = siteSettings.files[0].fields.find(f => f.name === 'hero');
hero.fields.push({ label: 'Hero Image (800x1000px JPG/WebP)', name: 'image', widget: 'image', required: false });

// Update Hero Proof
const heroProof = hero.fields.find(f => f.name === 'proof');
heroProof.widget = 'list';
heroProof.fields = [
  { label: 'Key (e.g. 38%)', name: 'k', widget: 'string' },
  { label: 'Value', name: 'v', widget: 'string' }
];

// 2. Founder
const founder = siteSettings.files[0].fields.find(f => f.name === 'founder');
founder.fields.push({ label: 'Founder Portrait (800x1000px JPG/WebP)', name: 'image', widget: 'image', required: false });

// 3. Case Studies
const caseStudies = siteSettings.files[0].fields.find(f => f.name === 'caseStudies');
const csItems = caseStudies.fields.find(f => f.name === 'items');
csItems.fields.push({ label: 'Thumbnail Image (800x1000px Portrait JPG/WebP)', name: 'image', widget: 'image', required: false });

// 4. Services
const services = siteSettings.files[0].fields.find(f => f.name === 'services');
const sTitle = services.fields.find(f => f.name === 'title');
sTitle.default = "Six parts. One system.";
const sIntro = services.fields.find(f => f.name === 'intro');
sIntro.default = "Each of these is a component of one revenue system. Alone they leak. Together they compound. We don't sell them as separate retainers — and we only sign if the whole picture makes sense.";

// 5. Protein Pals Screenshots
const pp = siteSettings.files[0].fields.find(f => f.name === 'proteinPals');
pp.fields.push({
  label: 'WhatsApp Screenshots',
  name: 'screenshots',
  widget: 'list',
  required: false,
  fields: [
    { label: 'Image', name: 'image', widget: 'image' },
    { label: 'Caption', name: 'caption', widget: 'string' }
  ]
});

fs.writeFileSync('admin/config.yml', yaml.dump(doc));
