export const introNodes = [
  {
    id: 'intro-prologue',
    text: 'You are a young detective, standing in the bitter cold North Pole.',
    options: [
      {
        text: 'Continue',
        nextText: 'intro-setting',
      },
    ],
  },
  {
    id: 'intro-setting',
    text: 'You see smoke billowing from a workshop in the distance. \n\n\
    You can hear the faint sound of bells ringing and the smell of gingerbread in the air. You take a big breathe in, and out. You watch it fog up and disappear in front of you, trying not to let the pressure of the case crush you.',
    options: [
      {
        text: 'Continue',
        nextText: 'intro-crossroads',
      },
    ],
  },
  {
    id: 'intro-crossroads',
    text: 'What do you do?',
    options: [
      {
        text: 'Try calling Santa on the phone',
        nextText: 'phone-call-santa',
        requiredState: (currentState) => currentState.phone,
        setState: { hasCalledSanta: true }
      },
      {
        text: 'Look around you',
        nextText: 'investigate-look-around',
      },
      {
        text: "Head towards Santa's workshop",
        nextText: 'workshop-approach',
      },
      {
        text: 'Head to the elf village',
        nextText: 'elf-approach',
      },
    ],
  },
]