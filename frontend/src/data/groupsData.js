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
        roomNumber: "201",
        name: "Cryptanalysis I",
        experts: [
            { name: "Shibam Ghosh", initials: "SG", image: shibamImg },
            { name: "Dhiman Saha", initials: "DS", image: dhimanImg }
        ],
        members: ["Soumen Jana", "Prathamesh Ram", "Dilip Sau", "Ayush", "Mohit Pal", "Akshay Ankush Yadav"]
    },
    {
        id: 2,
        roomNumber: "202",
        name: "Cryptanalysis II",
        experts: [
            { name: "Mostafizar Rahman", initials: "MR", image: mostafizarImg },
            { name: "M Prem Laxman Das", initials: "PD", image: premImg }
        ],
        members: ["Md Sariful Molla", "Niloy Das", "Anup Kundu", "Ajay Kumar Das", "Madhurima Das", "Manish Sahu", "Isha Goel"]
    },
    {
        id: 3,
        roomNumber: "203",
        name: "Cryptanalysis III",
        experts: [
            { name: "Sahiba Suryawanshi", initials: "SS", image: sahibaImg },
            { name: "Goutam Kumar Paul", initials: "GP", image: paulImg }
        ],
        members: ["Ranit Dutta", "Sreedhar Karmakar", "Hrithik Nandi", "Jhelum Dhar", "Nitesh Singh Bhadouria", "Medini H R"]
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
        roomNumber: "204",
        name: "Multi-Party Computation",
        experts: [
            { name: "Satrajit Ghosh", initials: "SG", image: satrajitImg }
        ],
        members: ["Amlan Sinha", "Kiran Deep Ghosh", "Suchandan Ghosh", "Sougata Mandal", "Soumit Pal", "Subha Kar"]
    },
    {
        id: 5,
        roomNumber: "205",
        name: "PQ Digital Signatures",
        experts: [
            { name: "R Kabaleeshwaran", initials: "RK", image: kableeshImg },
            { name: "Sabyasachi Karati", initials: "SK", image: sabyasachiImg }
        ],
        members: ["Akshay Dhan", "Gagan Soni", "Divya Nagabhai Varu", "Nikita Dey", "Divyam Katiyar"]
    },
    {
        id: 6,
        roomNumber: "206",
        name: "Searchable Encryption",
        experts: [
            { name: "Laltu Sardar", initials: "LS", image: laltuImg },
            { name: "Subhabrata Samajder", initials: "SS", image: subhabrataImg }
        ],
        members: ["Bibhas Chandra Das", "Palak Kumari", "Vipin Kumar", "Fedal Castro", "Shreya Dey"]
    },
    {
        id: 7,
        roomNumber: "207",
        name: "Security of TEEs",
        experts: [
            { name: "Avik Chakraborti", initials: "AC", image: avikImg },
            { name: "Srinivas Vivek", initials: "SV", image: vivekImg }
        ],
        members: ["Jitendra Kulaste", "Sandip Pal", "Ayantika Laha", "Sajani Kundu", "Md Alamgir Alam"]
    },
];

export const getGroupById = (id) => {
    return groups.find(group => group.id === parseInt(id));
};
