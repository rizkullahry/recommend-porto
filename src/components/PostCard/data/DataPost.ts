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
      avatar: '/image/recommend-profile2.jpg',
      username: 'Daniel Kwan',
      position: 'Senior Product Manager',
      address: 'BrightLayer Technologies',
      postTime: 'Yesterday at 14:27'
    },
    title: "Proactive, Empathetic, and Technically Sharp",
    desc: 'Rizku combines strategic clarity with sharp execution. During our six-month collaboration, he consistently turned complex challenges into focused, actionable plans. His solutions helped reduce design-to-dev time by 25%, and his presence lifted the entire team’s performance. Reliable under pressure and always composed, Rizku is someone I’d work with again without hesitation.<span style="color: #007bff; font-weight: 500;">#Recommended</span>',  
    likes: 38,
    commentsDisable: true
  },
  {
    userProfile: {
      avatar: '/image/recommend-profile3.jpg',
      username: 'Michelle Anggraeni',
      position: 'Engineering Manager',
      address: 'Ardent Labs',
      postTime: '31 May 2025 at 19:49'
    },
    title: 'Analytical, Creative, and Exceptionally Driven',
    desc: 'Rizku quickly proved himself as a standout contributor. He introduced a front-end coding standard that became a team-wide benchmark and significantly cut onboarding time. He’s sharp, fast to adapt, and blends creativity with technical rigor—someone who elevates any project he’s part of.',
    likes: 57,
    comments: 8,
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
      avatar: '/image/recommend-profile4.jpg',
      username: 'Joshua Hartono',
      position: 'Lead UX Engineer',
      address: 'CloudNova Studio',
      postTime: '25 May 2025 at 10:02'
    },
    title: 'Analytical, Creative, and Exceptionally Driven',
    desc: 'Working with Rizku was a refreshing experience. He brings empathy, curiosity, and technical sharpness to everything he does. Whether leading usability reviews or diving into Vue.js architecture, Rizku stays focused, user-driven, and helpful to the entire team. A thoughtful contributor who makes everyone better.',
    likes: 22,
    commentsDisable: false
  }
]
