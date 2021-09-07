import { icons } from "../assets";

const initialState = {
  userName: "Jessie",
  spaceAvailable: 32.5,
  totalSpace: 100,
  folders: [
    {
      id: 1,
      name: "The next big thing",
      fileAvailable: 12,
      spaceUsed: "2.1 gb",
      sharedWith: [
        {
          id: "user-1-1",
          image:
            "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        },
        {
          id: "user-2-1",
          image:
            "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        },
        {
          id: "user-3-1",
          image:
            "https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg",
        },
        {
          id: "user-4-1",
          image:
            "https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?size=626&ext=jpg&ga=GA1.2.1448711260.1630540800",
        },
        {
          id: "user-5-1",
          image:
            "https://goop-img.com/wp-content/uploads/2020/06/Mask-Group-2.png",
        },
        {
          id: "user-6-1",
          image:
            "https://www.faceapp.com/img/content/compare/beard-example-before@3x.jpg",
        },
      ],
    },
    {
      id: 2,
      name: "Top Secret",
      fileAvailable: 7,
      spaceUsed: "523 mb",
      sharedWith: [
        {
          id: "user-1-2",
          image:
            "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        },
        {
          id: "user-3-2",
          image:
            "https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg",
        },
        {
          id: "user-4-2",
          image:
            "https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?size=626&ext=jpg&ga=GA1.2.1448711260.1630540800",
        },
        {
          id: "user-5-2",
          image:
            "https://goop-img.com/wp-content/uploads/2020/06/Mask-Group-2.png",
        },
        {
          id: "user-6-2",
          image:
            "https://www.faceapp.com/img/content/compare/beard-example-before@3x.jpg",
        },
      ],
    },
    {
      id: 3,
      name: "Freebie project",
      fileAvailable: 3,
      spaceUsed: "192 mb",
      sharedWith: [
        {
          id: "user-1-3",
          image:
            "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        },
        {
          id: "user-3-3",
          image:
            "https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg",
        },
        {
          id: "user-4-3",
          image:
            "https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?size=626&ext=jpg&ga=GA1.2.1448711260.1630540800",
        },
      ],
    },
    {
      id: 4,
      name: "London Meetup",
      fileAvailable: 453,
      spaceUsed: "1.7 gb",
      sharedWith: [
        {
          id: "user-1-4",
          image:
            "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        },
        {
          id: "user-3-4",
          image:
            "https://www.thestatesman.com/wp-content/uploads/2017/08/1493458748-beauty-face-517.jpg",
        },
        {
          id: "user-4-4",
          image:
            "https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19637.jpg?size=626&ext=jpg&ga=GA1.2.1448711260.1630540800",
        },
        {
          id: "user-5-4",
          image:
            "https://goop-img.com/wp-content/uploads/2020/06/Mask-Group-2.png",
        },
        {
          id: "user-6-4",
          image:
            "https://www.faceapp.com/img/content/compare/beard-example-before@3x.jpg",
        },
      ],
    },
  ],
  fileTypes: [
    { id: 1, name: "Video", icon: "video-icon.png" },
    { id: 2, name: "Image", icon: "image-icon.png" },
    { id: 3, name: "Music", icon: "music-icon.png" },
    { id: 4, name: "Archive", icon: "archive-icon.png" },
    { id: 5, name: "Other", icon: null },
  ],
  localStorageFiles: [
    {
      id: "file-1",
      name: "Franky Wah-Aftertime",
      type: "music",
      fileExtension: "mp3",
      size: "9.2 mb",
      icon: icons.musicIcon,
    },
    {
      id: "file-2",
      name: "Annie's new car",
      type: "image",
      fileExtension: "jpg",
      size: "4.8 mb",
      icon: icons.imageIcon,
    },
    {
      id: "file-3",
      name: "Top secret archive",
      type: "archive",
      fileExtension: "zip",
      size: "3.7 gb",
      icon: icons.archiveIcon,
    },
    {
      id: "file-4",
      name: "On the top of the world",
      type: "document",
      fileExtension: "doc",
      size: "2.3 mb",
      icon: null,
    },
    {
      id: "file-5",
      name: "Fun times",
      type: "video",
      fileExtension: "mp4",
      size: "230 mb",
      icon: icons.videoIcon,
    },
  ],
  spaceInfo: [
    { id: 1, name: "Music", space: 10 },
    { id: 2, name: "Images", space: 6 },
    { id: 3, name: "Archives", space: 16 },
    { id: 4, name: "Documents", space: 8 },
    { id: 5, name: "Videos", space: 17 },
    { id: 6, name: "Other", space: 10.5 },
  ],
  leastUsed: [
    {
      id: "least-used-1",
      name: "TikTok dance",
      fileExtension: "mov",
      used: 1,
      size: "950 MB",
      icon: icons.videoIcon,
    },
    {
      id: "least-used-2",
      name: "Selfie without beard",
      fileExtension: "jpg",
      size: "8.7 MB",
      used: 2,
      icon: icons.imageIcon,
    },
    {
      id: "least-used-3",
      name: "University lectures",
      fileExtension: "zip",
      used: 4,
      size: "1 GB",
      icon: icons.archiveIcon,
    },
    {
      id: "least-used-4",
      name: "Important doc",
      size: "30 KB",
      fileExtension: "doc",
      used: 5,
      icon: null,
    },
  ],
  largestFiles: [
    {
      id: "largest-file-1",
      name: "File Name 1",
      fileExtension: "mov",
      size: "3.2 GB",
      icon: icons.videoIcon,
    },
    {
      id: "largest-file-2",
      name: "File Name 2",
      fileExtension: "zip",
      size: "2.4 GB",
      icon: icons.archiveIcon,
    },
    {
      id: "largest-file-3",
      name: "University lectures",
      fileExtension: "zip",
      size: "1 GB",
      icon: icons.archiveIcon,
    },
    {
      id: "largest-file-4",
      name: "Vacations",
      fileExtension: "mov",
      size: "510 MB",
      icon: icons.videoIcon,
    },
  ],
  latestAccessed: [
    {
      id: "latest-accessed-1",
      name: "File Name 1",
      fileExtension: "jpg",
      lastAccessed: "12:39 PM",
      size: "3.2 MB",
      icon: icons.imageIcon,
    },
    {
      id: "latest-accessed-2",
      name: "File Name 2",
      fileExtension: "zip",
      lastAccessed: "yesterday",
      size: "1.3 GB",
      icon: icons.archiveIcon,
    },
    {
      id: "latest-accessed-3",
      name: "University lectures",
      fileExtension: "zip",
      lastAccessed: "2 days ago",
      size: "450 MB",
      icon: icons.archiveIcon,
    },
    {
      id: "latest-accessed-4",
      name: "Vacations",
      fileExtension: "mov",
      lastAccessed: "3 days ago",
      size: "375 MB",
      icon: icons.videoIcon,
    },
  ],
};

export default (state = initialState, action) => {
  return state;
};
