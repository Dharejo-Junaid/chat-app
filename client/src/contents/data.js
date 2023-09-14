import { faker } from "@faker-js/faker";

export const CALL_LOGS = [
  {
    _id: 0,
    avatar: faker.image.avatar(),
    username: faker.name.firstName(),
    missed: true,
    incomming: false
  },
  {
    _id: 1,
    avatar: faker.image.avatar(),
    username: faker.name.firstName(),
    missed: true,
    incomming: true
  },
  {
    _id: 2,
    avatar: faker.image.avatar(),
    username: faker.name.firstName(),
    missed: false,
    incomming: false
  },
  {
    _id: 3,
    avatar: faker.image.avatar(),
    username: faker.name.firstName(),
    missed: true,
    incomming: true
  },
  {
    _id: 4,
    avatar: faker.image.avatar(),
    username: faker.name.firstName(),
    missed: true,
    incomming: false
  }
];

export const ChatList = [
    {
      _id: 0,
      avatar: faker.image.avatar(),
      username: faker.name.firstName(),
      msg: faker.music.songName(),
      time: "9:36",
      unread: 0,
      pinned: true,
      online: true,
    },
    {
      _id: 1,
      avatar: faker.image.avatar(),
      username: faker.name.firstName(),
      msg: faker.music.songName(),
      time: "12:02",
      unread: 2,
      pinned: true,
      online: false,
    },
    {
      _id: 2,
      avatar: faker.image.avatar(),
      username: faker.name.firstName(),
      msg: faker.music.songName(),
      time: "10:35",
      unread: 3,
      pinned: false,
      online: true,
    },
    {
      _id: 3,
      avatar: faker.image.avatar(),
      username: faker.name.firstName(),
      msg: faker.music.songName(),
      time: "04:00",
      unread: 0,
      pinned: false,
      online: true,
    },
    {
      _id: 4,
      avatar: faker.image.avatar(),
      username: faker.name.firstName(),
      msg: faker.music.songName(),
      time: "08:42",
      unread: 0,
      pinned: false,
      online: false,
    },
    {
      _id: 5,
      avatar: faker.image.avatar(),
      username: faker.name.firstName(),
      msg: faker.music.songName(),
      time: "08:42",
      unread: 0,
      pinned: false,
      online: false,
    },
    {
      _id: 6,
      avatar: faker.image.avatar(),
      username: faker.name.firstName(),
      msg: faker.music.songName(),
      time: "08:42",
      unread: 0,
      pinned: false,
      online: false,
    },
    {
      _id: 7,
      avatar: faker.image.avatar(),
      username: faker.name.firstName(),
      msg: faker.music.songName(),
      time: "08:42",
      unread: 0,
      pinned: false,
      online: false,
    },
  ];

  export const Chat_History = [
    {
      type: "msg",
      message: "Hi 👋🏻, How are ya ?",
      incoming: true,
      outgoing: false,
    },
    {
      type: "div_ider",
      text: "Today",
    },
    {
      type: "msg",
      message: "Hi 👋 Panda, not bad, u ?",
      incoming: false,
      outgoing: true,
    },
    {
      type: "msg",
      message: "Can you send me an abstarct image?",
      incoming: false,
      outgoing: true,
    },
    {
      type: "msg",
      message: "Ya sure, sending you a pic",
      incoming: true,
      outgoing: false,
    },
  
    {
      type: "msg",
      subtype: "avatar",
      message: "Here You Go",
      avatar: faker.image.abstract(),
      incoming: true,
      outgoing: false,
    },
    {
      type: "msg",
      message: "Can you please send this in file format?",
      incoming: false,
      outgoing: true,
    },
  
    {
      type: "msg",
      subtype: "doc",
      message: "Yes sure, here you go.",
      incoming: true,
      outgoing: false,
    },
    {
      type: "msg",
      subtype: "link",
      preview: faker.image.cats(),
      message: "Yep, I can also do that",
      incoming: true,
      outgoing: false,
    },
    {
      type: "msg",
      subtype: "reply",
      reply: "This is a reply",
      message: "Yep, I can also do that",
      incoming: false,
      outgoing: true,
    },
  ];

  export const SHARRED_DOCS = [
    
    {
      type: "msg",
      subtype: "doc",
      message: "Yes sure, here you go.",
      incoming: true,
      outgoing: false,
    },
    {
      type: "msg",
      subtype: "doc",
      message: "Yes sure, here you go.",
      incoming: true,
      outgoing: false,
    },
    {
      type: "msg",
      subtype: "doc",
      message: "Yes sure, here you go.",
      incoming: true,
      outgoing: false,
    },
    {
      type: "msg",
      subtype: "doc",
      message: "Yes sure, here you go.",
      incoming: true,
      outgoing: false,
    },
    {
      type: "msg",
      subtype: "doc",
      message: "Yes sure, here you go.",
      incoming: true,
      outgoing: false,
    },
  ]

  export const SHARRED_LINKS = [

    {
      type: "msg",
      subtype: "link",
      preview: faker.image.cats(),
      message: "Yep, I can also do that",
      incoming: true,
      outgoing: false,
    },
    
    {
      type: "msg",
      subtype: "link",
      preview: faker.image.cats(),
      message: "Yep, I can also do that",
      incoming: true,
      outgoing: false,
    },

    {
      type: "msg",
      subtype: "link",
      preview: faker.image.cats(),
      message: "Yep, I can also do that",
      incoming: true,
      outgoing: false,
    },

    {
      type: "msg",
      subtype: "link",
      preview: faker.image.cats(),
      message: "Yep, I can also do that",
      incoming: true,
      outgoing: false,
    },

    {
      type: "msg",
      subtype: "link",
      preview: faker.image.cats(),
      message: "Yep, I can also do that",
      incoming: true,
      outgoing: false,
    },

    {
      type: "msg",
      subtype: "link",
      preview: faker.image.cats(),
      message: "Yep, I can also do that",
      incoming: true,
      outgoing: false,
    }
  ]