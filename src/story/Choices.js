var choices = [
  {
    choices: [
      {
        store: "features",
        routeBegins: "showEffects",
        content: "Effects",
        nextIndex: 0
      },
      {
        store: "features",
        routeBegins: "showTransitions",
        content: "Transitions",
        nextIndex: 0
      },

      {
        store: "features",
        routeBegins: "showStoringChoices",
        content: "Storing choices for future use"
      }
    ]
  },
  {
    choices: [
      {
        store: "seeSavingChoices",
        routeBegins: "seeSavingChoices",
        content: "Pick ufloor"
      },
      {
        store: "noObject",
        routeBegins: "objectIgnored",
        content: "Ignore the object."
      }
    ]
  }
];

export default choices;
