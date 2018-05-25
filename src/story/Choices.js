var choices = [
  {
    choices: [
      {
        store: "pickedObject",
        routeBegins: "pickedUpObject",
        content: "Pick up the object ooor"
      },
      {
        store: "noObject",
        routeBegins: "objectIgnored",
        content: "Ignore the object."
      }
    ]
  },
  {
    choices: [
      {
        store: "pickedObject",
        routeBegins: "ignoredObject",
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
