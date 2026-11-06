export const elfFightNodes = [
  {
    id: 'elf-throw-punch',
    text: 'You clench your fist and wind up. The elves around the fire go very quiet.',
    options: [
      {
        text: 'Swing [Roll D20]',
        nextText: 'elf-punch-roll'
      }
    ]
  },

  {
    id: 'elf-punch-roll',
    text: 'Roll a D20.',
    options: [
      {
        text: '1: Critical fail',
        nextText: 'elf-punch-crit-fail'
      },
      {
        text: '2-9: Fail',
        nextText: 'elf-punch-fail'
      },
      {
        text: '10-19: Success',
        nextText: 'elf-punch-success',
        setState: { knowsHandlers: true }
      },
      {
        text: '20: Critical success',
        nextText: 'elf-punch-crit-success',
        setState: { knowsHandlers: true, loftKey: true }
      }
    ]
  },

  {
    id: 'elf-punch-crit-fail',
    text: 'You slip on the ice and land flat on your back. The elves laugh. Somebody steals your hat.',
    options: [
      {
        text: 'Pick yourself up',
        nextText: 'elf-leave'
      }
    ]
  },

  {
    id: 'elf-punch-fail',
    text: 'You miss. The elf ducks and shoves you into a snowbank. "Try that again and I\'ll bite."',
    options: [
      {
        text: 'Apologise',
        nextText: 'elf-apologise'
      },
      {
        text: 'Walk away',
        nextText: 'elf-leave'
      }
    ]
  },

  {
    id: 'elf-apologise',
    text: 'The elf studies you.\n\n\
    "Reindeer handlers. Ask them. Now stay away from me."',
    options: [
      {
        text: 'Head to the stables',
        nextText: 'stables-arrive',
        setState: { knowsHandlers: true }
      },
      {
        text: 'Walk away',
        nextText: 'elf-leave',
        setState: { knowsHandlers: true }
      }
    ]
  },

  {
    id: 'elf-punch-success',
    text: 'Your fist connects. The elf stumbles back, spitting tinsel.\n\n\ "Alright! Ask the reindeer handlers! I know nothing else!"',
    options: [
      {
        text: 'Head to the stables',
        nextText: 'stables-arrive'
      },
      {
        text: "Head towards Santa's workshop",
        nextText: 'workshop-approach'
      }
    ]
  },

  {
    id: 'elf-punch-crit-success',
    text: 'You catch the elf square on the chin and he drops into the snow. A ring of keys falls from his apron, with a brass tag stamped LOFT.\n\n\
    The other elves glare. "Reindeer handlers," he groans. "Take it and go."',
    options: [
      {
        text: 'Take the keys and head to the stables',
        nextText: 'stables-arrive'
      },
      {
        text: "Take the keys and head towards Santa's workshop",
        nextText: 'workshop-approach'
      }
    ]
  }
]