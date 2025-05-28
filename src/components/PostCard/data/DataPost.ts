import type { PostCardProps } from '../types/PostCard';


export const dataPostCard: PostCardProps[] = [
  {
    userProfile: {
      avatar: '/image/recommend-profile1.jpg', 
      username: 'Lena Morales',
      position: 'Senior Product Owner',
      address: 'ZenoTech',
      postTime: 'Today at 17:06'
    },
    
    title: 'Strategic, Positive, and Results-Driven',
    desc: 'I had the pleasure of working with Rizku on a six-month product development cycle, and he quickly became the backbone of our team. Rizku blends strategic thinking with hands-on execution in a way that’s rare. He was instrumental in helping us launch ahead of schedule, and his insights directly contributed to a 30% increase in user engagement post-launch. Beyond his technical and creative abilities, Rizku brings a positive, solutions-focused energy that inspires everyone around him. I’d work with Rizku again in a heartbeat.',
    likes: 10,
    comments: 2,
    commentsDisable: false,
    commentsData: [{
      name: 'Tanya L.',
      position: 'UX Researcher',
      placeName: 'ZenoTech',
      time: 'Today at 19:10',
      content: 'I couldn’t agree more. Rizku’s ability to balance high-level strategy with day-to-day execution is truly impressive',
      like: 5,
      children: [{
          name: 'Mira Patel',
          position: 'Digital Strategist',
          placeName: 'ZenoTech',
          time: 'Today at 19:26',
          content: 'He’s also the kind of teammate you always want on a critical project.',
          like: 1,
      }
      ]
  },
  {
      name: 'Rizkullah Risly',
      position: 'Undergraduate Student',
      placeName: 'BINUS University',
      time: 'Today at 17:46',
      content: 'Thank you so much, Lena. It was an incredible experience working alongside such a talented and driven team.',
      like: 3,
      avatar: '/image/profpic.png'
  }]
    // hasComments: true
  },
  {
    userProfile: {
      avatar: '/image/postbuma-avatar.png',
      username: 'BUMA',
      position: 'Intercom',
      address: 'BUMA HO',
      postTime: 'Yesterday at 17:06'
    },
    title: 'Memorandum Pengaturan Sistem Kerja Hybrid Working',
    desc: 'Yth. Rekan-rekan BUMA,\nBersama ini kami informasikan Memorandum No. MEMO/DIR/0014/VII/2023 perihal Pengaturan Sistem Kerja Hybrid Working. Untuk informasi selengkapnya, silakan mengunduh Memorandum terlampir.\n\n Demikian Memorandum ini kami sampaikan, terima kasih atas perhatiannya. <span style="color: #007bff; font-weight: 500;">#BukitMakmur</span>',  
    likes: 38,
    commentsDisable: true
  },
  {
    userProfile: {
      avatar: '/image/post3-avatar.png',
      username: 'Mahfud Alamin',
      position: 'Superintendent Production LAT',
      address: 'BUMA LAT',
      postTime: '02 Agu 2023 at 17:06'
    },
    title: 'Rapat Umum Pemegang Saham Tahunan',
    desc: 'Saatnya kembali berkumpul dalam momentum penting tahunan kami! Kami dengan bangga mengundang seluruh pemegang saham untuk bergabung dalam Rapat Umum Pemegang Saham Tahunan (RUPST) kami dalam industri pertambangan. Acara ini merupakan kesempatan berharga untuk berbagi pencapaian kami sepanjang tahun, strategi masa depan, dan melibatkan pemegang saham dalam pengambilan keputusan yang mengarah ke kesuksesan bersama. ...',
    likes: 57,
    comments: 25,
    commentsDisable: false,
    commentsData: [{
      name: 'Jane Doe',
      position: 'System Analyst',
      placeName: 'BUMA HO',
      time: 'Today at 17:06',
      content: 'Nice Post!',
      like: 5,
      children: [{
          name: 'Rama Muhammad S',
          position: 'UI Engineer',
          placeName: 'BUMA HO',
          time: 'Today at 17:46',
          content: 'Cool!',
          like: 3,
      }
      ]
  },
  {
      name: 'Ilham Aditya',
      position: 'System Analyst',
      placeName: 'BUMA HO',
      time: 'Yesterday at 17:46',
      content: 'Muanteb',
      like: 3,
      avatar: '/image/postcomment1-avatar.png'
  },
  {
    name: 'Ilham Aditya',
    position: 'System Analyst',
    placeName: 'BUMA HO',
    time: 'Yesterday at 17:46',
    content: 'Muanteb',
    like: 3,
    avatar: '/image/postcomment1-avatar.png'
  }]
  },
  {
    userProfile: {
      avatar: '/image/post4-avatar.png',
      username: 'Sarah Annisa',
      position: 'Analyst - HR Development ADT',
      address: 'BUMA ADT',
      postTime: '05 Agu 2023 at 17:06'
    },
    title: 'Bekerja di BUMA',
    desc: 'Dunia pertambangan batu bara telah memberi saya banyak pelajaran berharga. Setiap hari di lapangan adalah tantangan yang menguji batas kemampuan dan ketahanan. Meskipun kerasnya kondisi kerja, saya bangga menjadi bagian dari industri ini yang memainkan peran penting dalam menyediakan energi untuk dunia. Terima kasih kepada semua rekan kerja yang selalu bekerja keras dan menjaga keselamatan. 🛠️🌏💪 ...',
    likes: 22,
    commentsDisable: false
  }
]
