
export const fetchUsers = async () => {
 
  return [
    { 
      id: 1, 
      name: 'Doğa Savaş', 
      age: 21,
      email: 'doga@example.com',
      todos: [
        { id: 1, todo: 'JavaScript öğren', completed: false, description: 'JavaScript ile ilgili temel bilgileri öğren.' },
        { id: 2, todo: 'Yeni bir müzik türü dinle', completed: true, description: 'Farklı müzik türleri keşfet.' },
      ]
    },
    { 
      id: 2, 
      name: 'Tuanahan Orak', 
      age: 21,
      email: 'tunahan@example.com',
      todos: [
        { id: 3, todo: 'React ile projeler yap', completed: false, description: 'React framework kullanarak projeler geliştirmek.' },
        { id: 4, todo: 'Günlük yaz', completed: true, description: 'Her gün düşüncelerini yazmak.' },
      ]
    },
    { 
      id: 3, 
      name: 'Doğukan Sarı', 
      age: 23,
      email: 'dogukan@example.com',
      todos: [
        { id: 5, todo: 'Kitap oku', completed: true, description: 'Günlük olarak en az 20 sayfa kitap okumak.' },
        { id: 6, todo: 'Sinema izle', completed: false, description: 'Yeni çıkan bir filmi sinemada izlemek.' },
      ]
    },
    { 
      id: 4, 
      name: 'Sema Bekdemir', 
      age: 22,
      email: 'sema@example.com',
      todos: [
        { id: 7, todo: 'Spor yap', completed: false, description: 'Haftada en az üç gün spor salonuna gitmek.' },
        { id: 8, todo: 'Sağlıklı yemek yap', completed: true, description: 'Yeni sağlıklı tarifler denemek.' },
      ]
    },
    { 
      id: 5, 
      name: 'Elif Keskin', 
      age: 20,
      email: 'elif@example.com',
      todos: [
        { id: 9, todo: 'Yürüyüşe çık', completed: true, description: 'Her sabah yürüyüşe çıkmak.' },
        { id: 10, todo: 'Hobi edin', completed: false, description: 'Yeni bir hobi bulmak ve bu hobi üzerinde çalışmak.' },
      ]
    },
    { 
      id: 6, 
      name: 'Buse Sakarya', 
      age: 26,
      email: 'buse@example.com',
      todos: [
        { id: 11, todo: 'Resim yap', completed: false, description: 'Sanat yeteneğini geliştirmek için resim yapmak.' },
        { id: 12, todo: 'Bahçede çalış', completed: true, description: 'Bahçedeki bitkilerle ilgilenmek.' },
      ]
    },
    { 
      id: 7, 
      name: 'Aleyna Ekici', 
      age: 24,
      email: 'aleyna@example.com',
      todos: [
        { id: 13, todo: 'Müzik dinle', completed: true, description: 'Her gün en az bir saat müzik dinlemek.' },
        { id: 14, todo: 'Yeni bir enstrüman öğren', completed: false, description: 'Gitar çalmayı öğrenmek.' },
      ]
    },
    { 
      id: 8, 
      name: 'Aysu Aşçı', 
      age: 27,
      email: 'aysu@example.com',
      todos: [
        { id: 15, todo: 'Film izleyelim', completed: false, description: 'Haftada bir yeni bir film izlemek.' },
        { id: 16, todo: 'Kitap tavsiyesi oku', completed: true, description: 'Arkadaşlardan kitap tavsiyesi almak.' },
      ]
    },
    { 
      id: 9, 
      name: 'Can Sağdıç', 
      age: 20,
      email: 'can@example.com',
      todos: [
        { id: 17, todo: 'Sosyal medyada paylaşım yap', completed: true, description: 'Günlük paylaşımlar yapmak.' },
        { id: 18, todo: 'Hedeflerimi belirle', completed: false, description: 'Kısa ve uzun vadeli hedefler belirlemek.' },
      ]
    },
    { 
      id: 10, 
      name: 'Ekin Kavraal', 
      age: 27,
      email: 'ekin@example.com',
      todos: [
        { id: 19, todo: 'Yeni tarifler dene', completed: true, description: 'Yeni yemek tarifleri denemek.' },
        { id: 20, todo: 'Yoga yap', completed: false, description: 'Haftada en az iki gün yoga yapmak.' },
      ]
    },
  ];
};