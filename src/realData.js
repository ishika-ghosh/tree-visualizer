export const data = {
  1: {
    actionId: 1,
    id: 1,
    parentActionId: null,
    name: "first template message",
    child: ["2"],
    moveToNextActionLogic: null,
    var: {
      data: {
        userid: 4,
        isPortal: true,
        objectid: 918802241740,
        accountid: 15,
        variables: [],
        headerText: "",
        templateId: "528610806023370",
        headerMediaURL:
          "https://s3.us-east-2.amazonaws.com/tbplabs.tech/chatAppFile/WhatsApp Image 2023-05-20 at 4.13.20 PM.jpeg",
        headerMediaType: "IMAGE",
      },
      action: "SendMessageToCustomer",
    },
  },
  2: {
    actionId: 2,
    id: 3,
    parentActionId: 1,
    name: "send text Message",
    child: ["3"],
    moveToNextActionLogic: "SKIP",
    var: {
      data: {
        text: "Hi! Thank you for your inquiry, our manager will contact you soon. Can you answer a few questions to receive a brochure of the project?",
        userid: 4,
        isPortal: true,
        objectid: 918802241740,
        accountid: 15,
      },
      action: "SendMessageToCustomer",
    },
  },
  3: {
    actionId: 3,
    id: 5,
    parentActionId: 2,
    name: "investment or self use list",
    child: ["4"],
    moveToNextActionLogic: null,
    var: {
      body: {
        text: "Are you looking for investment or self use?",
      },
      type: "list",
      action: {
        button: "Options",
        sections: [
          {
            rows: [
              {
                id: "Investment",
                title: "Investment",
              },
            ],
            title: "Investment",
          },
          {
            rows: [
              {
                id: "Self Use",
                title: "Self Use",
              },
            ],
            title: "Self Use",
          },
        ],
      },
      footer: {
        text: "F&C Properties ",
      },
      header: {
        text: "Great!",
        type: "text",
      },
    },
  },
  4: {
    actionId: 4,
    id: 4,
    parentActionId: 3,
    name: "budget list messsage",
    child: ["5"],
    moveToNextActionLogic: null,
    var: {
      body: {
        text: "Within what budget are you considering buying a property?",
      },
      type: "list",
      action: {
        button: "Options",
        sections: [
          {
            rows: [
              {
                id: "175,000$ to 250,000$",
                title: "175,000$ to 250,000$",
              },
            ],
            title: "175,000$ to 250,000$",
          },
          {
            rows: [
              {
                id: "325,000$ to 500,000$",
                title: "325,000$ to 500,000$",
              },
            ],
            title: "325,000$ to 500,000$",
          },
          {
            rows: [
              {
                id: "500,000$ to 700,000$",
                title: "500,000$ to 700,000$",
              },
            ],
            title: "500,000$ to 700,000$",
          },
          {
            rows: [
              {
                id: "1,000,000$ above",
                title: "1,000,000$ above",
              },
            ],
            title: "1,000,000$ above",
          },
        ],
      },
      footer: {
        text: "F&C Properties ",
      },
      header: {
        text: "Great!",
        type: "text",
      },
    },
  },
  5: {
    actionId: 5,
    id: 2,
    parentActionId: 4,
    name: "how many bedrooms",
    child: ["6"],
    moveToNextActionLogic: null,
    var: {
      body: {
        text: "How many bedrooms are you looking for?",
      },
      type: "list",
      action: {
        button: "Options",
        sections: [
          {
            rows: [
              {
                id: "Studio",
                title: "Studio",
              },
            ],
            title: "Studio",
          },
          {
            rows: [
              {
                id: "1 Bedroom",
                title: "1 Bedroom",
              },
            ],
            title: "1 Bedroom",
          },
          {
            rows: [
              {
                id: "2 Bedroom",
                title: "2 Bedroom",
              },
            ],
            title: "2 Bedroom",
          },
          {
            rows: [
              {
                id: "3 Bedroom",
                title: "3 Bedroom",
              },
            ],
            title: "3 Bedroom",
          },
          {
            rows: [
              {
                id: "4 Bedroom",
                title: "4 Bedroom",
              },
            ],
            title: "4 Bedroom",
          },
          {
            rows: [
              {
                id: "Townhouse",
                title: "Townhouse",
              },
            ],
            title: "Townhouse",
          },
          {
            rows: [
              {
                id: "Villa",
                title: "Villa",
              },
            ],
            title: "Villa",
          },
          {
            rows: [
              {
                id: "Penthouse",
                title: "Penthouse",
              },
            ],
            title: "Penthouse",
          },
        ],
      },
      footer: {
        text: "F&C Properties ",
      },
      header: {
        text: "Great!",
        type: "text",
      },
    },
  },
  6: {
    actionId: 6,
    id: 6,
    parentActionId: 5,
    name: "good time to reach",
    child: ["7"],
    moveToNextActionLogic: null,
    var: {
      body: {
        text: "What is a convenient time to contact you?",
      },
      type: "list",
      action: {
        button: "Options",
        sections: [
          {
            rows: [
              {
                id: "9AM to 10AM",
                title: "9AM to 10AM",
              },
            ],
            title: "9AM to 10AM",
          },
          {
            rows: [
              {
                id: "11AM to 12PM",
                title: "11AM to 12PM",
              },
            ],
            title: "11AM to 12PM",
          },
          {
            rows: [
              {
                id: "1PM to 2PM",
                title: "1PM to 2PM",
              },
            ],
            title: "1PM to 2PM",
          },
          {
            rows: [
              {
                id: "3PM to 4PM",
                title: "3PM to 4PM",
              },
            ],
            title: "3PM to 4PM",
          },
          {
            rows: [
              {
                id: "5PM to 6PM",
                title: "5PM to 6PM",
              },
            ],
            title: "5PM to 6PM",
          },
          {
            rows: [
              {
                id: "7PM to 8PM",
                title: "7PM to 8PM",
              },
            ],
            title: "7PM to 8PM",
          },
        ],
      },
      footer: {
        text: "F&C Properties ",
      },
      header: {
        text: "Great!",
        type: "text",
      },
    },
  },
  7: {
    actionId: 7,
    id: 7,
    parentActionId: 6,
    name: "thank you message",
    child: [8],
    moveToNextActionLogic: "SKIP",
    var: {
      data: {
        text: "Thank you for your time, our agent will contact you as soon as possible😇\n Here is a brochure of the project 👇",
        userid: 4,
        isPortal: true,
        objectid: 918802241740,
        accountid: 15,
      },
      action: "SendMessageToCustomer",
    },
  },
  8: {
    actionId: 8,
    id: 8,
    parentActionId: 7,
    name: "brochure",
    child: [],
    moveToNextActionLogic: null,
    var: {
      data: {
        url: "https://s3.us-east-2.amazonaws.com/tbplabs.tech/chatAppFile/85777_Catalog.pdf-to3KL.pdf",
        text: "",
        type: "document",
        userid: 2,
        isPortal: true,
        objectid: 918802241740,
        accountid: 15,
      },
      action: "SendMessageToCustomer",
    },
  },
};
