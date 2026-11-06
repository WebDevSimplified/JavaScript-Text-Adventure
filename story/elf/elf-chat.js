export const elfChatNodes = [
  {
    id: 'elf-approach',
    text: 'You walk towards a cluster of small wooden buildings. The smell of fresh hay and reindeer hangs in the air, mingling with smoke from a fire in an old metal drum.\n\n\
    A handful of elves warm their hands. One catches your eye, grimaces, then turns away.',
    options: [
      {
        text: 'Warm your hands by the fire',
        nextText: 'elf-warm-hands'
      },
      {
        text: 'Ask about Santa',
        nextText: 'elf-ask-about-santa-cold'
      },
      {
        text: 'Threaten them',
        nextText: 'elf-threaten'
      }
    ]
  },

  {
    id: 'elf-warm-hands',
    text: 'You silently join the fire. All you can hear is the crackle of flames and the crunch of snow.',
    options: [
      {
        text: 'Wait',
        nextText: 'elf-wait-by-fire'
      },
      {
        text: 'Ask when they last saw Santa',
        nextText: 'elf-ask-last-seen'
      }
    ]
  },

  {
    id: 'elf-wait-by-fire',
    text: 'The other elves drift away, leaving you with the one who grimaced. In a gruff voice they say, "I could do with a cigarette."',
    options: [
      {
        text: 'Offer a cigarette',
        nextText: 'elf-offer-cigarette',
        requiredState: (currentState) => currentState.cigarettes,
        setState: { cigarettes: false, elfFriend: true }
      },
      {
        text: 'Say you don\'t have one',
        nextText: 'elf-no-cigarette'
      }
    ]
  },

  {
    id: 'elf-ask-last-seen',
    text: '"When did you last see Santa?" The elf shrugs and stares into the fire.\n\n\
    "Ask me again when I\'ve got something to smoke."',
    options: [
      {
        text: 'Wait quietly',
        nextText: 'elf-wait-by-fire'
      },
      {
        text: 'Press harder',
        nextText: 'elf-ask-about-santa-cold'
      }
    ]
  },

  {
    id: 'elf-offer-cigarette',
    text: 'The elf takes a long drag and coughs. "Thanks. I needed that." He nods at the space beside him.',
    options: [
      {
        text: 'Ask about Santa',
        nextText: 'elf-ask-about-santa'
      }
    ]
  },

  {
    id: 'elf-no-cigarette',
    text: 'The elf grunts and goes back to watching the flames.',
    options: [
      {
        text: 'Ask about Santa anyway',
        nextText: 'elf-ask-about-santa-cold'
      },
      {
        text: 'Look around you',
        nextText: 'investigate-look-around'
      },
      {
        text: "Head towards Santa's workshop",
        nextText: 'workshop-approach'
      }
    ]
  },

  {
    id: 'elf-ask-about-santa',
    text: '"So what do you know about Santa\'s disappearance?" He takes another drag.',
    options: [
      {
        text: 'Listen',
        nextText: 'elf-listen'
      }
    ]
  },

  {
    id: 'elf-listen',
    text: 'A few minutes pass. The elf sighs.\n\n\
    "It\'s been a long festive period. Demand\'s at a record high, the big man\'s nowhere to be seen, and everyone\'s pretending it\'s fine."',
    options: [
      {
        text: 'Ask about his family',
        nextText: 'elf-ask-about-family'
      },
      {
        text: 'Ask about the reindeer',
        nextText: 'elf-ask-about-reindeer',
        setState: { knowsHandlers: true }
      },
      {
        text: 'Ask about Jack Frost',
        nextText: 'elf-ask-about-jack'
      },
      {
        text: 'Ask how to get into the workshop',
        nextText: 'elf-give-pass',
        requiredState: (currentState) => currentState.elfFriend,
        setState: { hasPass: true }
      }
    ]
  },

  {
    id: 'elf-ask-about-family',
    text: '"Trouble at home. Arguments. Lots of them. That\'s all I\'ll say." He flicks the butt into the snow.',
    options: [
      {
        text: 'Ask about the reindeer',
        nextText: 'elf-ask-about-reindeer',
        setState: { knowsHandlers: true }
      },
      {
        text: 'Ask about Jack Frost',
        nextText: 'elf-ask-about-jack'
      },
      {
        text: 'Ask how to get into the workshop',
        nextText: 'elf-give-pass',
        requiredState: (currentState) => currentState.elfFriend,
        setState: { hasPass: true }
      }
    ]
  },

  {
    id: 'elf-ask-about-reindeer',
    text: '"Speak to the reindeer handlers. Hollis and his lot. Jumpy all month, and the stables are off limits."\n\n\
    He turns back towards the workshop.',
    options: [
      {
        text: 'Head to the stables',
        nextText: 'stables-arrive'
      },
      {
        text: 'Ask about Jack Frost',
        nextText: 'elf-ask-about-jack'
      },
      {
        text: 'Ask how to get into the workshop',
        nextText: 'elf-give-pass',
        requiredState: (currentState) => currentState.elfFriend,
        setState: { hasPass: true }
      },
      {
        text: "Head towards Santa's workshop",
        nextText: 'workshop-approach'
      }
    ]
  },

  {
    id: 'elf-ask-about-jack',
    text: '"Jack Frost? Used to be Vice Head Elf. Ran the second floor for two hundred years. They gave Head Elf to Evergreen instead, so Jack handed in his notice and said Christmas would be sorry."\n\n\
    He shivers.\n\n\
    "Funny. The fire never feels as warm when he\'s mentioned."',
    options: [
      {
        text: 'Ask about the reindeer',
        nextText: 'elf-ask-about-reindeer',
        setState: { knowsHandlers: true }
      },
      {
        text: 'Ask how to get into the workshop',
        nextText: 'elf-give-pass',
        requiredState: (currentState) => currentState.elfFriend,
        setState: { hasPass: true }
      },
      {
        text: "Head towards Santa's workshop",
        nextText: 'workshop-approach'
      }
    ]
  },

  {
    id: 'elf-give-pass',
    text: 'The elf rummages in his apron and hands you a crumpled lanyard.\n\n\
    "Visitor pass. Belonged to a cousin. He won\'t be needing it."',
    options: [
      {
        text: "Head towards Santa's workshop",
        nextText: 'workshop-approach'
      },
      {
        text: 'Head to the stables',
        nextText: 'stables-arrive',
        requiredState: (currentState) => currentState.knowsHandlers
      },
      {
        text: 'Ask about Jack Frost',
        nextText: 'elf-ask-about-jack'
      }
    ]
  },

  {
    id: 'elf-ask-about-santa-cold',
    text: 'You press for answers. The elf shrugs. "I\'m just a line elf. I make toys. I don\'t see nothin\'."',
    options: [
      {
        text: 'Threaten them',
        nextText: 'elf-threaten'
      },
      {
        text: 'Warm your hands and wait',
        nextText: 'elf-warm-hands'
      },
      {
        text: 'Walk away',
        nextText: 'elf-leave'
      }
    ]
  },

  {
    id: 'elf-threaten',
    text: 'You lean in. "Tell me when you last saw Santa." The elf stares back. "Or what?"',
    options: [
      {
        text: 'Throw a punch',
        nextText: 'elf-throw-punch'
      },
      {
        text: 'Ask why they are so desperate to avoid answering',
        nextText: 'elf-intimidate'
      }
    ]
  },

  {
    id: 'elf-intimidate',
    text: 'The elf\'s eyes flicker. "...Fine. Ask your questions." The gruffness has gone out of him, and so has the warmth.',
    options: [
      {
        text: 'Ask about Santa',
        nextText: 'elf-ask-about-santa'
      }
    ]
  },

  {
    id: 'elf-leave',
    text: 'You leave the fire behind. The elves watch you go.',
    options: [
      {
        text: 'Look around you',
        nextText: 'investigate-look-around'
      },
      {
        text: "Head towards Santa's workshop",
        nextText: 'workshop-approach'
      },
      {
        text: 'Head to the stables',
        nextText: 'stables-arrive',
        requiredState: (currentState) => currentState.knowsHandlers
      },
      {
        text: 'Go back to the fire',
        nextText: 'elf-warm-hands'
      }
    ]
  }
]