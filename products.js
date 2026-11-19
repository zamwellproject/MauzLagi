/*
  Sumber data tunggal untuk katalog, hero beranda, dan kustomisasi.
  Ubah nama, harga, gambar, atau opsi di sini — semua halaman ikut berubah.
*/
window.MauzData = (() => {
  const products = [
    {
      id: 'matcha',
      name: 'Matcha Bliss',
      flavor: 'Matcha',
      price: 25000,
      badge: 'Best Seller',
showInHero: true,
heroOrder: 1,
      weight: '220g / 6 pcs',
      tag: 'Uji Matcha 100%',
      sauce: 'matcha',
      desc: 'Pisang tanduk krispi dengan limpahan saus green tea Jepang premium.',
      dot: '#15803d',
      tint: 'rgba(34,197,94,.10)',
      popular: 1,
      chef: 3,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuyeY-unpZz6lYRhg-ZI1DTCnWvA4TC3O5w_XhTT46F6U1MR8ytI_-BhyRMVvj4MLc3YkffIqoQhpezkj2j5uzabKITlIrp45gK11QiWHJwcnLJm3fjXF1bFjPZHclp3j-zqdzWVAu2ek6BznVCPJWjyW286CPKWE_wXjJLNibhWqKXwlEq1ELrk5ydvoTLwaeMnmjTZiHzaaxoG_b1f7vKzP_Q6egX0JygnBPE_0'
    },
    {
      id: 'tiramisu',
      name: 'Velvet Tiramisu',
      flavor: 'Tiramisu',
      price: 26000,
      badge: "Chef's Pick",
showInHero: true,
heroOrder: 2,
      weight: '220g / 6 pcs',
      tag: 'Espresso Dust',
      sauce: 'tiramisu',
      desc: 'Krim tiramisu lembut Italia berpadu taburan bubuk espresso Arabika pilihan.',
      dot: '#78350f',
      tint: 'rgba(180,83,9,.09)',
      popular: 3,
      chef: 1,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBZ1Co_JW6L1HmXw4ohyZG87DX9qIxgETrqiQAkyqVWz8vm3A93x31EA_QTIx59gwX6R_2eg-ZJpafg40rs28HhhRzO0aLgTnSULHE3qLrh5V1RBB_uosf0D98iAQLoA_bDpFSX5kwR130e1am__CLeRJ6g8Mj_IduOY-0mtBJAzWwIt_rOOLmQncRXLM7Mmw-YdZDjztlnUX7desW3xs5iWUO3pj9g9i0frNQ9zM'
    },
    {
      id: 'coklat',
      name: 'Coklat Belgia',
      flavor: 'Coklat',
      price: 25000,
      badge: 'Signature',
showInHero: true,
heroOrder: 3,
      weight: '220g / 6 pcs',
      tag: 'Dark Couverture',
      sauce: 'coklat',
      desc: 'Saus coklat pekat Belgia dengan taburan parutan coklat couverture murni.',
      dot: '#451a03',
      tint: 'rgba(120,53,15,.09)',
      popular: 2,
      chef: 2,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0DteOJb7Z9KDRtgxrC-zT3MukMitJSZ8HXgGAwXaD3CxN_GfV9a7NeS_vnDOzmDFVflL3uoFGDstNkj8xaZwRxT4xKohevBwweMcBK0hGYSbEnHj7jN-RuefcD3fPPrdPw5tZq_2NLbyfcWXS_EubfcI8fnqfCgZsy9QRVXgvhSmHMHCF3S7OwBGBOhJBUkMj0NHfJgeedBWALhf-ohJY9FaJ338Zd7Y885BUPuA'
    },
    {
      id: 'stroberi',
      name: 'Ruby Stroberi',
      flavor: 'Stroberi',
      price: 25000,
      badge: 'Seasonal',
showInHero: true,
heroOrder: 4,
      weight: '220g / 6 pcs',
      tag: 'Real Berry Pulp',
      sauce: 'stroberi',
      desc: 'Glaze stroberi segar dengan bulir buah asli dan rasa asam-manis seimbang.',
      dot: '#e11d48',
      tint: 'rgba(244,63,94,.09)',
      popular: 4,
      chef: 4,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6oKDcGRd2WJ0QB2z0KUbaGGASy8RR5jxdn8KLel2XH8cOPnuQn9n0OBjd712KyRxwYKRE7QnLmylblYlSOeAnsG2lKXGAD0YoVt1Zqp3THVxCk7DBmru3STCt-xf9C7lfzh6KE2Wk8a4SbdcJSzyKz-c8Q1LBjbiRhMnZ7IYCOQZ-48FzSUx3azQusNtotqQI_MsAAPQ73VTjtQ6AQ2uHhuhbLzDH0KDABHypEUA'
    },
  ];

  const portions = [
    { id: 'standard', label: 'Standard', detail: '6 pcs original', price: 0 },
    { id: 'moderate', label: 'Moderate', detail: '+2 pcs pisang', price: 4000 },
    { id: 'extra', label: 'Extra', detail: '+4 pcs pisang', price: 6000 }
  ];

  const toppings = [
    { id: 'normal', label: 'Normal Glaze', detail: 'Standar racikan chef', price: 0 },
    { id: 'extra-sauce', label: 'Extra Saus', detail: 'Saus {sauce} melimpah', price: 4000 },
    { id: 'double', label: 'Double Dip', detail: 'Double saus & crumble', price: 6000 }
  ];

  return {
    products, portions, toppings,
    find: id => products.find(p => p.id === id) || null
  };
})();
