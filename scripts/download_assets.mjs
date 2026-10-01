import fs from 'fs';
import path from 'path';
import https from 'https';

const images = [
  // Hero
  { name: 'hero-product.png', url: 'https://framerusercontent.com/images/Krb5dkxFHqS8N0Fe2wYr6crVYpg.png?width=1024&height=1024' },
  { name: 'hero-model.png', url: 'https://framerusercontent.com/images/DR5l0DriK2khnOF60po5bnXc.png?width=1437&height=1024' },

  // Intro Orbit Carousel (6 items)
  { name: 'orbit-1.png', url: 'https://framerusercontent.com/images/dBoAo8qqpOgmu78ImP6JbW74vs.png?width=300&height=300' },
  { name: 'orbit-2.png', url: 'https://framerusercontent.com/images/aEAk56Ux3d45jwp1r1UCTF9qU.png?width=300&height=300' },
  { name: 'orbit-3.png', url: 'https://framerusercontent.com/images/WaqExVxUBwx4hFeCc1A8x3DoUo.png?width=300&height=300' },
  { name: 'orbit-4.png', url: 'https://framerusercontent.com/images/EuYL5lMcAuJ5qBnSbyHJUS5v8Wg.png?width=300&height=300' },
  { name: 'orbit-5.png', url: 'https://framerusercontent.com/images/OjDCB1CLtWONggvUo5wCoDLvKxc.png?width=300&height=300' },
  { name: 'orbit-6.png', url: 'https://framerusercontent.com/images/FU73VNSsy2yVN2W2YLhvmc.png?width=300&height=300' },

  // New Arrivals Products (6 items)
  { name: 'arrival-1-foam.png', url: 'https://framerusercontent.com/images/mcLQFrE0pwBZ1gJRkdTzkwjSgU.png?width=1024&height=1190' },
  { name: 'arrival-2-mask.png', url: 'https://framerusercontent.com/images/dhsoyBWOursAWGrUaxHfJurG3x0.png?width=1024&height=1024' },
  { name: 'arrival-3-butter.png', url: 'https://framerusercontent.com/images/oKelAMPGAt9QCnqubpcYYJG19E.png?width=1024&height=1024' },
  { name: 'arrival-4-toner.png', url: 'https://framerusercontent.com/images/nf3lGwtOaNot5xxlbPbU9f1wxw.png?width=1024&height=1024' },
  { name: 'arrival-5-oil.png', url: 'https://framerusercontent.com/images/X3GsqzeC7NH8bYEdDMEfR6ZMt6U.png?width=1024&height=1024' },
  { name: 'arrival-6-eye.png', url: 'https://framerusercontent.com/images/7k539GcTgqEduMqpFPAcGBVYsw.png?width=1024&height=1024' },

  // Services (5 items)
  { name: 'service-1-glow.jpeg', url: 'https://framerusercontent.com/images/jce1lX2GDa5PuE8w9wr9yUmwON4.jpeg?width=686&height=1200' },
  { name: 'service-2-analysis.png', url: 'https://framerusercontent.com/images/kzIVsGQ6zxXW4i2QIaCjSOecGYk.png?width=949&height=1337' },
  { name: 'service-3-hydra.jpeg', url: 'https://framerusercontent.com/images/hdTI6SGcsKtH4GyX1MlfwP5eo.jpeg?width=686&height=1200' },
  { name: 'service-4-peel.jpeg', url: 'https://framerusercontent.com/images/vvsRA8lAQQGWgAC6KPwAysFrbVs.jpeg?width=686&height=1200' },
  { name: 'service-5-barrier.jpeg', url: 'https://framerusercontent.com/images/eE15gIALdLJQetC2gEcONkp5w4.jpeg?width=800&height=1200' },

  // Video poster
  { name: 'video-poster.png', url: 'https://framerusercontent.com/images/o3JA07tIs0VeS03vYLMk2hro.png?width=1200&height=800' },

  // About us portrait
  { name: 'about-model.png', url: 'https://framerusercontent.com/images/PzDd6qBpHB6uj2UPyzVLpe9Ldo.png?width=1254&height=1254' },

  // Best Sellers (5 products)
  { name: 'bestseller-1-serum.png', url: 'https://framerusercontent.com/images/Krb5dkxFHqS8N0Fe2wYr6crVYpg.png?width=1024&height=1024' },
  { name: 'bestseller-2-cream.png', url: 'https://framerusercontent.com/images/86bgQVPl4uPo6IrCflnU4XLf0.png?width=1024&height=996' },
  { name: 'bestseller-3-scrub.png', url: 'https://framerusercontent.com/images/W6WDkgebaS9tGHxP5VQE2qAWE.png?width=1024&height=1024' },
  { name: 'bestseller-4-clay.png', url: 'https://framerusercontent.com/images/i3FSuxwYfskbEjHBCN3SW8kc6w.png?width=1024&height=1024' },
  { name: 'bestseller-5-spf.png', url: 'https://framerusercontent.com/images/vYAtccEV6C6bfgiVWXPSaCs3RIg.png?width=1024&height=1024' },

  // Slider Arrows
  { name: 'arrow-prev.svg', url: 'https://framerusercontent.com/images/Q6akO5I6PLM8ltoAJuCfzpdE5nE.svg?width=34&height=34' },
  { name: 'arrow-next.svg', url: 'https://framerusercontent.com/images/4n8qD0Th2Tmb6cwRECtlXrviIw.svg?width=34&height=34' },

  // Testimonials
  { name: 'testimonial-1.png', url: 'https://framerusercontent.com/images/hSQRElmodqkYmuJMnHYkby428A.png?width=1254&height=1254' },

  // Blogs (1 featured + 3 cards)
  { name: 'blog-main.png', url: 'https://framerusercontent.com/images/Jlz84JfvszclZsJJ1uOUjDgA5o.png?width=1254&height=1254' },
  { name: 'blog-thumb-1.png', url: 'https://framerusercontent.com/images/CIYUXyR78VnaA1ZPnt6ftQZh1E.png?width=1254&height=1254' },
  { name: 'blog-thumb-2.png', url: 'https://framerusercontent.com/images/DHXRu6p1uv5q7FkPikLALXUMJg.png?width=1254&height=1254' },
  { name: 'blog-thumb-3.png', url: 'https://framerusercontent.com/images/0UlWPtMMr2mTCEneoM6KQS1hkI.png?width=1254&height=1254' },

  // CTA Section
  { name: 'cta-model.png', url: 'https://framerusercontent.com/images/Aq90auBsaL9g2dAECkQA52LNxM.png?width=1007&height=1536' },
];

const videos = [
  { name: 'showcase.mp4', url: 'https://framerusercontent.com/assets/BB8mcKj60E6q8FU5MtuvIS85bsM.mp4' }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        return downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log('Downloading images...');
  for (const img of images) {
    const dest = path.join('public/images', img.name);
    try {
      await downloadFile(img.url, dest);
      console.log(`Downloaded: ${img.name}`);
    } catch (e) {
      console.error(`Failed ${img.name}:`, e.message);
    }
  }

  console.log('Downloading videos...');
  for (const vid of videos) {
    const dest = path.join('public/videos', vid.name);
    try {
      await downloadFile(vid.url, dest);
      console.log(`Downloaded: ${vid.name}`);
    } catch (e) {
      console.error(`Failed ${vid.name}:`, e.message);
    }
  }
}

run();
