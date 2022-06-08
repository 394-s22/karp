# PROJECT STATUS

Development of this version of the Karp web app will slow to a halt at the conclusion of Northwestern's 2022 Spring Quarter. It will likely be maintained and/or continued by the faculty of the COMP_SCI 336 course, though in the event that other contributors take on this project, this repository may be forked for further development.

As it stands, the "main" branch contains the most updated version of the Karp codebase; this version has a partial-implementation of type dropdowns for decision problem instances. A user can select a type from each corresponding instance's dropdown menus, however, this data is not yet stored anywhere on the frontend, and therefore the user will receive bad output from the app upon clicking the Submit button, even if every other part of their reduction is filled in correctly. The "demo" branch contains the latest viable version of the Karp codebase, which can run the primary end-to-end user interaction, though instead of dropdown menus, each decision problem instance has a textfield that requires the user to manually enter its type.

At this stage of the project, an alpha version of Karp is being used as a local backend in lieu of a remote Karp server. Therefore, the Karp web app must be run locally in entirety at present. The React app should be run first:

```bash
# .../karp
npm run start
```

Followed by the local back-end server, spun in karp/racket-server.js:


```bash
# .../karp
node racket-server.js
```

Then, provided the user enters every part of their reduction, the Submit button at the bottom may be clicked to receive the result shortly after.

# Karp

## Description

Karp is a web application written in JavaScript and React used to verify reductions of NP-Problems in real-time, allowing users to enter their problem definitions, forward and backward certificates, and instances in the titular Karp language. The app interprets the Karp text as Racket code, runs it on a backend server, generates the output, and feeds this back to a console on the frontend of the app.

The primary use-case for Karp is for Northwestern University students taking COMP_SCI 336: Design and Analysis of Algorithms, in which assignments are given involving the need to produce a reduction between two given problem definitions that is proven to be correct. 

## Background

### Class NP

For a problem $A$, a verifier $V$ for $A$ can verify that any supposed answer to $A$ indeed solves $A$. **NP** is the class of problems with verifiers that verify with a polynomial time complexity. **NP** stands for nondeterministic polynomial, and is named this way because a problem is in **NP** iff there are no proposed solutions to the problem for which correctnes is unknown by a nondeterministic polynomial time Turing Machine.

### Reductions

A problem $A$ is mapping reducible to problem $B$ if there is a (computable) function $f$ such that an instance $w$ of problem $A$ implies the existence of a corresponding instance $f(w)$ of $B$ and vice-versa. $f$ is called a reduction from $A$ to $B$. $f$ is a computable function if there exists some Turing Machine $M$ such that, for every input $w$, $M$ halts with just $f(w)$ on its tape.

## Features

- ***Karp-to-Racket translation***: As opposed to the original Karp app –– which required users to generate Racket code from Karp, leave the web app, and manually run the produced Racket files on their local machines –– this version of the Karp web app provides a streamlined interface for problem definitions and the other parts of a reduction, allowing users to input their definitions as readable "Karp" text!
- ***Real-time output***: Upon providing every part of the reduction and clicking the "Submit" button, users are given the results of their reduction on a console built-in to the web app!
- ***Add/remove instances***: Baked into the user interface are add/remove buttons for each decision problem instance, allowing users to edit the exact number of instances their problem definitions require!

## Installation

### Requirements

In order to properly run Karp in its current state, the latest version of [Racket](https://download.racket-lang.org/) (v8.4) and Karp (v2.0) must be installed. Karp is currently in the process of being released as an open source project, and will also soon be available as a public package in Racket's catalogue; until then, please contact the faculty of COMP_SCI 336 for distribution of the Karp software.

After installing Racket and opening DrRacket, use the package manager to install the Karp package.

![Dr. Racket](./docs/images/dr-racket.png)

![Package Manager](./docs/images/pkg-manager.png)

## Usage

Looking at the working Karp app on the "demo" branch, a user begins at the home page for Karp:

![Karp Demo](./docs/images/demo-karp.png)

In order to receive the verification output of the reduction from one problem to another, the user must input all of the following into each corresponding text field: the problem definition that is being reduced from (Reduced-From), the problem definition that is being reduced to (Reduced-To), the forward reduction definition (Forward), the backward reduction definition (Backward), and the reduction instance definition (Instance). The example used in the following screenshot is the reduction from the 3SAT problem (the satisfiability problem, where each clause is restricted to 3 literals) to the ISET problem (the independent decision set problem):

![Karp Demo Input](./docs/images/demo-karp-input.png)

For some problem definitions –– such as ISET –– there may be a need to include more than one instance, in which case the add/remove buttons can be used to edit the precise number of instances needed:

![Karp Demo Input 2](./docs/images/demo-karp-input2.png)

After everything is entered in, and the user waits a few moments after pressing the "Submit" button at the bottom, the Karp console will display the output of the Karp input interpreted and run as Racket:

![Karp Demo Output (Test Failed)](./docs/images/demo-karp-output-fail.png)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors and Acknowledgment

Thank you to Jaz, Roy, Grace L, Arhan, Brando, Bobo and Grace W for coming together to make this project happen, and a special thanks goes to Chenhao and Christos for working alongside all of us contributers as project clients to better realize the Karp web app.

## License

N/A

# Create React App Toolchain <br>("Getting Started with Create React App")</br>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
