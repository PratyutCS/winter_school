// Speaker Images
import shibamImg from "../../assets/speakers/shiman.png";
import dhimanImg from "../../assets/speakers/dhiman.png";
import mostafizarImg from "../../assets/speakers/Mostafizar.jpg";
import premImg from "../../assets/speakers/prem.png";
import angshumanImg from "../../assets/speakers/angshuman.jpg";
import satrajitImg from "../../assets/speakers/satrajit.jpg";
import sabyasachiImg from "../../assets/speakers/sabyacachi.jpg";
import laltuImg from "../../assets/speakers/laltu.jpg";
import avikImg from "../../assets/speakers/avik.jpg";
import vivekImg from "../../assets/speakers/vi_.jpg";

// New uploads
import sahibaImg from "../../assets/speakers/sahiba.jpeg";
import paulImg from "../../assets/speakers/paul.png";
import subidhImg from "../../assets/speakers/subidh_ali.jpg";
import kableeshImg from "../../assets/speakers/r_kableesh.png";
import subhabrataImg from "../../assets/speakers/subhabrata.jpg";

// Placeholder
import placeholderImg from "../../assets/logo.png";

export const groups = [
    {
        id: 1,
        roomNumber: "L201",
        name: "Cryptanalysis I",
        experts: [
            { name: "Dr Shibam Ghosh", initials: "SG", image: shibamImg },
            { name: "Dr Dhiman Saha", initials: "DS", image: dhimanImg }
        ],
        members: ["Dr Jamunarani D", "Dr Mohit Pal", "Akshay Ankush Yadav", "Ayush", "Dilip Sau", "Prathamesh Ram", "Soumen Jana"]
    },
    {
        id: 2,
        roomNumber: "L202",
        name: "Cryptanalysis II",
        experts: [
            { name: "Dr Mostafizar Rahman", initials: "MR", image: mostafizarImg },
            { name: "Dr M Prem Laxman Das", initials: "PD", image: premImg }
        ],
        members: ["Anup Kumar Kundu", "Ajay Kumar Das", "Manish Sahu", "Md Sariful Molla", "Niloy Das", "Madhurima Das", "Isha Goel"]
    },
    {
        id: 3,
        roomNumber: "L203",
        name: "Cryptanalysis III",
        experts: [
            { name: "Dr Sahiba Suryawanshi", initials: "SS", image: sahibaImg },
            { name: "Dr Goutam Kumar Paul", initials: "GP", image: paulImg }
        ],
        members: ["Dr Medini H R", "Hrithik Nandi", "Sreedhar Karmakar", "Ranit Datta", "Jhelum Dhar", "Nitesh Singh Bhadouria"]
    },
    // {
    //     id: 4,
    //     name: "Cryptographic Hardware",
    //     experts: [
    //         { name: "Subidh Ali", initials: "SA", image: subidhImg },
    //         { name: "Angshuman Karmakar", initials: "AK", image: angshumanImg }
    //     ],
    //     members: ["Jamunarani D", "Venkatesh Kumar", "Santosh Kumar Singh", "Sajjan Kumar"]
    // },
    {
        id: 4,
        roomNumber: "L204",
        name: "Multi-Party Computation",
        experts: [
            { name: "Dr Satrajit Ghosh", initials: "SG", image: satrajitImg }
        ],
        members: ["Amlan Sinha", "Kiran Deep Ghosh", "Suchandan Ghosh", "Sougata Mandal", "Soumit Pal", "Subha Kar"]
    },
    {
        id: 5,
        roomNumber: "L205",
        name: "PQ Digital Signatures",
        experts: [
            { name: "Dr R Kabaleeshwaran", initials: "RK", image: kableeshImg },
            { name: "Dr Sabyasachi Karati", initials: "SK", image: sabyasachiImg }
        ],
        members: ["Akshay Dhan", "Gagan Soni", "Divya Nagabhai Varu", "Nikita Dey", "Divyam Katiyar", "Venkatesh Kumar", "Sajjan Kumar"]
    },
    {
        id: 6,
        roomNumber: "L206",
        name: "Searchable Encryption",
        experts: [
            { name: "Dr Laltu Sardar", initials: "LS", image: laltuImg },
            { name: "Dr Subhabrata Samajder", initials: "SS", image: subhabrataImg }
        ],
        members: ["Bibhas Chandra Das", "Palak Kumari", "Pratyut", "Vipin Kumar", "Fedal Castro", "Shreya Dey"]
    },
    {
        id: 7,
        roomNumber: "L207",
        name: "Security of TEEs",
        experts: [
            { name: "Dr Avik Chakraborti", initials: "AC", image: avikImg },
            { name: "Dr Srinivas Vivek", initials: "SV", image: vivekImg }
        ],
        members: ["Dr Ayantika Laha", "Jitendra Kulaste", "Sandip Pal", "Sajani Kundu", "Md Alamgir Alam", "Santosh Kumar Singh"]
    },
];

export const getGroupById = (id) => {
    return groups.find(group => group.id === parseInt(id));
};
