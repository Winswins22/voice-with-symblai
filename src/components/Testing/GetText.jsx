function getRandomNumberBetween(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

const texts = [
  [
    {
      title:"1. Moon",
      text:"The Moon is a barren, rocky world without air and water. It has a dark lava plain on its surface. The Moon is filled with craters. It has no light of its own. It gets its light from the Sun. The Moon keeps changing its shape as it moves round the Earth. It spins on its axis in 27.3 days; stars named after Edwin Aldrin were the first ones to set their foot on the Moon on 21 July 1969 They reached the Moon in their spacecraft named Apollo II."
    },
    {
      title:"1. A Snake Charmer",
      text:"A snake charmer is a person who moves the streets with different types of the banks of the river Yamuna. It is snakes in his basket. He goes from one place to another to show various types of snakes and their tricks. He carries a pipe with which he plays music and snakes dance to his tune. He usually wears a colourful dress. The job of a snake charmer is quite dangerous. Some snakes are quite poisonous and can even bite him. It is not an easy task to catch and train them for the shows."
    },
    {
      title:"1. Street Beggar",
      text:"A street beggar can be seen everywhere; at the bus stop, railway stations, religious places, markets etc. Some beggars are crippled, lame and some are blind. They are unable to earn their livelihood. Whereas some are healthy and they do not deserve our sympathy. We should see that they take up some profession. They should not be allowed to beg. On my way to school I see a beggar daily. He wears old rags. He is partially blind. I feel pity seeing him but I can’t help it. I can only pray to God to help him to earn his livelihood."
    },
    {
      title:"1. Doctor",
      text:"The doctor is a person who looks after the sick people and prescribes medicines so that the patient recovers fast. In order to become a doctor, a person has to study medicine. Doctors lead a hard life. Their life is very busy. They get up early in the morning and go to the hospital. They work without taking a break. They always remain polite so that patients feel comfortable with them. Since doctors work so hard we must realise their value."
    },
    {
      title:"1. Hawker",
      text:"A hawker is a person who moves from one place to another and sells their goods, by shouting on the streets. They work hard throughout the day. They move on the street on their bicycle and sometimes on foot and sell their products. We can see hawkers everywhere. They move everywhere selling their goods without caring about the weather. There is a hawker who sells vegetables on his bicycle in our locality. His name is Manoj. He brings fresh vegetables at a very reasonable price. He is a nice and honest hawker."
    },
    {
      title:"1. Farmer",
      text:"India is an agricultural country. Most of the people live in villages and are farmers. They grow cereals, pulses, vegetables and fruits. The farmers lead a tough life. They get up early in the morning and go to the fields. They stay and work on the farm late till evening. The farmers usually live in kutcha houses. Though they work hard they remain poor. Farmers eat simple food; wear simple clothes and rear animals like cows, buffaloes and oxen. Without them there would be no cereals for us to eat. They play an important role in the growth and economy of a country."
    },
    {
      title:"1. Solar System",
      text:"The Solar System consists of the Sun Moon and Planets. It also consists of comets, meteoroids and asteroids. The Sun is the largest member of the Solar System. In order of distance from the Sun, the planets are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune and Pluto; the dwarf planet. The Sun is at the centre of the Solar System and the planets, asteroids, comets and meteoroids revolve around it."
    }        
  ],
  [
    {
      title:"2. Sun",
      text:"The sun is a huge ball of gases. It has a diameter of 1,392,000 km. It is so huge that it can hold millions of planets inside it. The Sun is mainly made up of hydrogen and helium gas. The surface of the Sun is known as the photosphere. The photosphere is surrounded by a thin layer of gas known as the chromospheres. Without the Sun, there would be no life on Earth. There would be no plants, no animals and no human beings. As, all the living things on Earth get their energy from the Sun for their survival."
    },
    {
      title:"2. Delhi",
      text:"Delhi is the capital of India. It is situated on the banks of the river Yamuna. It is surrounded by Haryanaand Uttar Pradesh. It has some of the famous buildings and monuments such as the Qutub Minar, Reu Fort, Lotus Temple, Akshardham Temple etc. Some of the monuments are hundreds of years old. Apart from this, there is the Parliament House, the Central Secretariat and the famous Connaught place. Delhi is a beautiful city. But, it is becoming very crowded and polluted. I love Delhi a lot."
    },
    {
      title:"2. Apollo 11",
      text:"On July 16, 1969, the Apollo 11 spacecraft launched from the Kennedy Space Center in Florida. Its mission was to go where no human being had gone before—the moon! The crew consisted of Neil Armstrong, Michael Collins, and Buzz Aldrin. The spacecraft landed on the moon in the Sea of Tranquility, a basaltic flood plain, on July 20, 1969. The moonwalk took place the following day. On July 21, 1969, at precisely 10:56 EDT, Commander Neil Armstrong emerged from the Lunar Module and took his famous first step onto the moon’s surface. He declared: That’s one small step for man, one giant leap for mankind. It was a monumental moment in human history!"
    },
    {
      title:"2. Alexander the Great",
      text:"Alexander the Great was a successful ruler because his actions created long lasting effects on cultures that continue to the present day. One example of his legacy was the creation of a Hellenistic society. Hellenism was the combination of Greek, Persian, and Egyptian cultures. During this remarkable time period, people were encouraged to pursue a formal education and produce many different kinds of art. New forms of math, science, and design made a great impact on society. If this new way of life had not been as successful as it was, Alexander’s legacy would not be as memorable and groundbreaking. Because he conquered many countries and blended together many different cultures, Alexander the Great is widely recognized for his achievements and credited with being one of the greatest rulers in history."
    }
  ],
  [
    {
      title:"3. Mahabharata",
      text:"The Mahabharata is a story about a great battle between the Kauravas and the Pandavas. The battle was fought in Kurukshetra near Delhi. Many kings and princes took part in the battle. The Pandavas defeated the Kauravas. The Bhagavad Gita is a holy book of the Hindus. It is a part of the Mahabharata. Then, Lord Rama, with the help of It is a book of a collection of teachings of Lord Krishna to Arjuna in the battlefield. It is the longest epic in the world."
    },
    {
      title:"3. Ramayana",
      text:"The Ramayana is a story of Lord Rama written by the SageValmiki. Lord Rama, the prince of Ayodhya, in order to help his father Dasharatha went into exile for fourteen years. His wife, Sita and his younger brother Lakshmana also went with him. He went through many difficulties in the forest. One day Ravana, the king of Lanka carried away Sita with him. Then, Lord Rama, with the help of Hanumana, defeated and killed Ravana; Sita, Rama and Lakshmana returned to Ayod hya after their exile."
    },
    {
      title:"3. The Taj Mahal",
      text:"The Taj Mahal is a beautiful monument built in 1631 by an Emperor named Shah Jahan in memory of his wife Mumtaz Mahal. It is situated on the banks of river Yamuna at Agra. It looks beautiful in the moonlight. The Taj Mahal is made up of white marble. In front of the monument, there is a beautiful garden known as the Charbagh. Inside the monument, there are two tombs. These tombs are of Shah Jahan and his wife Mumtaz Mahal. The Taj Mahal is considered as one of the Seven Wonders of the World. Many tourists come to see this beautiful structure from different parts of the world."
    }
  ]
]

// difficulty can be from 1-3
function GetText(difficulty = 1){
  console.log("difficulty", difficulty)
  console.warn("difficulty", difficulty)

  return texts[difficulty-1][getRandomNumberBetween(0, texts[difficulty-1].length-1)]
}

export default GetText
