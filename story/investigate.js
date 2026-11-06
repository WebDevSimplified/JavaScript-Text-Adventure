export const investigateNodes = [
  {
    id: 'investigate-look-around',
    text: 'You take a moment to look around you.',
    options: [
      {
        text: 'Look around [Roll D20]',
        nextText: 'investigate-look-roll'
      },
    ]
  },

  {
    id: 'investigate-look-roll',
    text: 'Roll a D20.',
    options: [
      {
        text: '1: Critical fail',
        nextText: 'investigate-crit-fail-look'
      },
      {
        text: '2-9: Fail',
        nextText: 'investigate-fail-look'
      },
      {
        text: '10-19: Success',
        nextText: 'investigate-success-look'
      },
      {
        text: '20: Critical success',
        nextText: 'investigate-crit-success-look'
      },
    ]
  },

  {
    id: 'investigate-crit-fail-look',
    text: 'The wind howls around you, and the blizzard gives you little more than a wall of white...\n\n\
    You can barely make out the workshop in the distance. A cold sense of dread settles in — you feel like you\'re missing something important.',
    options: [
      {
        text: 'Try to call the workshop phone',
        nextText: 'phone-call-santa',
        requiredState: (currentState) => !currentState.hasCalledSanta,
        setState: { hasCalledSanta: true }
      },
      {
        text: 'Walk to the workshop',
        nextText: 'workshop-approach',
        requiredState: (currentState) => currentState.hasCalledSanta
      },
      {
        text: 'Head to the elf village',
        nextText: 'elf-approach'
      },
      {
        text: 'Look again [Roll D20]',
        nextText: 'investigate-look-roll',
        requiredState: (currentState) => !currentState.lookedAgain,
        setState: { lookedAgain: true }
      }
    ]
  },

  {
    id: 'investigate-fail-look',
    text: 'The wind howls around you, and the blizzard starts to pick up.\n\n\
    You can barely make out the workshop or the elf village in the distance. Something about this place feels wrong, but you can\'t quite put your finger on it.',
    options: [
      {
        text: 'Try to call the workshop phone',
        nextText: 'phone-call-santa',
        requiredState: (currentState) => !currentState.hasCalledSanta,
        setState: { hasCalledSanta: true }
      },
      {
        text: 'Walk to the workshop',
        nextText: 'workshop-approach',
        requiredState: (currentState) => currentState.hasCalledSanta
      },
      {
        text: 'Head towards the elves',
        nextText: 'elf-approach'
      },
      {
        text: 'Look again [Roll D20]',
        nextText: 'investigate-look-roll',
        requiredState: (currentState) => !currentState.lookedAgain,
        setState: { lookedAgain: true }
      }
    ]
  },

  {
    id: 'investigate-success-look',
    text: 'You spot a set of fresh tracks disappearing into the snow. They are too small to be Santa\'s boots, but they seem to lead towards the stables.',
    options: [
      {
        text: 'Follow the tracks',
        nextText: 'stables-arrive'
      },
      {
        text: 'Ask the elves about the tracks',
        nextText: 'elf-approach'
      },
      {
        text: 'Head towards the workshop instead',
        nextText: 'workshop-approach'
      }
    ]
  },

  {
    id: 'investigate-crit-success-look',
    text: 'Something catches your eye beneath the snow. You brush it away and find a torn piece of red fabric, caught on a broken wooden fence post. It looks like it came from Santa\'s coat. Beside it are fresh footprints leading towards the stables.',
    options: [
      {
        text: 'Examine the fabric closely',
        nextText: 'investigate-examine-fabric',
        setState: { redFabric: true }
      },
      {
        text: 'Follow the footprints towards the stables',
        nextText: 'stables-arrive',
        setState: { redFabric: true }
      },
      {
        text: 'Take the fabric and head towards the workshop',
        nextText: 'workshop-approach',
        setState: { redFabric: true }
      }
    ]
  },

  {
    id: 'investigate-examine-fabric',
    text: 'Fine red wool, still faintly warm. Along the hem runs a stripe of blue frost that refuses to melt, even in your gloved hand.',
    options: [
      {
        text: 'Follow the footprints towards the stables',
        nextText: 'stables-arrive',
        setState: { frostClue: true }
      },
      {
        text: 'Ask the elves about the frost',
        nextText: 'elf-approach',
        setState: { frostClue: true }
      },
      {
        text: 'Take the fabric to the workshop',
        nextText: 'workshop-approach',
        setState: { frostClue: true }
      }
    ]
  }
]