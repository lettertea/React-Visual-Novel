var Choices = [
  {
    choices: [
      {
        store: "pickedObject",
        jumpToBecauseChoice: "pickedUpObject",
        content: "Pick up the object on the floor"
      },
      {
        store: "noObject",
        jumpToBecauseChoice: "objectIgnored",
        content: "Ignore the object."
      }
    ]
  }
];

export default Choices;
