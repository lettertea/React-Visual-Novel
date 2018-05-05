var Choices = [
  {
    choices: [
      {
        store: "pickedObject",
        jumpTo: "pickedUpObject",
        content: "Pick up the object on the floor"
      },
      {
        store: "noObject",
        jumpTo: "objectIgnored",
        content: "Ignore the object."
      }
    ]
  }
];

export default Choices;
