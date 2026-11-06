export const phoneNodes = [
  {
    id: 'phone-call-santa',
    text: 'Your phone rings. And rings. Until you hear a jolly voice on the other end. "Ho ho ho! Merry Christmas! Please leave a message after the bell.". \n\n\
    Voicemail. Obviously that it wouldn\'t be that easy.',
    options: [
      {
        text: 'Sigh dramatically and hang up',
        nextText: 'phone-sigh'
      },
      {
        text: 'Stay on the line and listen after the bell',
        nextText: 'phone-listen'
      }
    ]
  },

  {
    id: 'phone-listen',
    text: 'You wait through the beep. Under the static you hear wind, a creaking door and the low clank of sleigh bells. Not workshop bells. Bigger. Heavier.',
    options: [
      {
        text: 'Hang up and think about it',
        nextText: 'phone-think',
        setState: { heardBells: true }
      }
    ]
  },

  {
    id: 'phone-think',
    text: 'You pocket the phone. Those were not workshop bells. They sounded like reindeer.',
    options: [
      {
        text: 'Follow the sound of the bells',
        nextText: 'stables-arrive'
      },
      {
        text: 'Head to the nearest elf',
        nextText: 'elf-approach'
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
    id: 'phone-sigh',
    text: 'Frustrated, you try again, and again you hear: "Ho ho ho! Merry Christmas! Please leave a message after the bell."',
    options: [
      {
        text: 'Shake your head and smoke a cigarette',
        nextText: 'phone-smoke-cigarette',
        requiredState: (currentState) => currentState.cigarettes,
        setState: { cigarettes: false }
      },
      {
        text: 'Throw your phone into the snow in anger',
        nextText: 'phone-throw-phone',
        requiredState: (currentState) => currentState.phone,
        setState: { phone: false }
      },
      {
        text: 'Give up and put the phone away',
        nextText: 'phone-give-up'
      }
    ]
  },

  {
    id: 'phone-give-up',
    text: 'You put the phone away. Your shoulders sag as you realize that you are in over your head.',
    options: [
      {
        text: 'Head to the nearest elf',
        nextText: 'elf-approach'
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
    id: 'phone-smoke-cigarette',
    text: 'You take a long deep inhale.',
    options: [
      {
        text: 'Head to the nearest elf',
        nextText: 'elf-approach'
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
    id: 'phone-throw-phone',
    text: 'Your shoulders sag as you realize that you are in over your head.',
    options: [
      {
        text: 'Head to the nearest elf',
        nextText: 'elf-approach'
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
  }
]