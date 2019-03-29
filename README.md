# Serverless-Starter-Service API

A Serverless API MicroService that adds ES7 syntax, serverless-offline, environment variables, and unit test support. Part of the [Serverless Tutorial Series](https://github.com/lopezdp/TechnicalArticles/blob/master/HowToBuildAServerlessReactAppOnAWS.md).

The [Serverless Tutorial Series](https://github.com/lopezdp/TechnicalArticles/blob/master/HowToBuildAServerlessReactAppOnAWS.md) uses the [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack) plugin, [Babel](https://babeljs.io), [serverless-offline](https://github.com/dherault/serverless-offline), and [Jest](https://facebook.github.io/jest/). This service supports the following features:

- **ES7 script is supported in all Lambdas**
  - Use `import` and `export`
- **Bundle Lambda functions using Webpack**
- **Execute API Gateway locally**
  - Use `serverless offline start`
- **Added Support for unit testing**
  - Run `npm test` to run your tests
- **Sourcemaps enable debugging and error messages**
  - Error message show the correct line numbers
  - Works in production with AWSCloudWatch
- **Automatic support for multiple handler files**
  - You do not have to add a new entry your `webpack.config.js`
- **Add environment variables for each stage deployed**

---

### Demo

A demo version of this service is hosted on AWS - [`https://g0xd40o7wd.execute-api.us-east-1.amazonaws.com/dev/starterService`](hhttps://g0xd40o7wd.execute-api.us-east-1.amazonaws.com/dev/starterService)

And here is an example of the ES7 source behind it

``` javascript
const message = ({time, ...rest}) => new Promise((resolve, reject) => setTimeout(() => {
  resolve(`${rest.copy} (with a delay)`);
}, time * 1000)
);

export const starterService = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `You are now Serverless on AWS! ${(await message({ time: 1, copy: "Your serverless lambda has executed as it should!"}))}`,
      input: event
    })
  };

  callback(null, response);
};
```

### Requirements

- [Install the Serverless Framework](https://serverless.com/framework/docs/providers/aws/guide/installation/)
- [Configure your AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)

### Installation

To create a new Serverless project.

``` bash
$ serverless install --url https://github.com/lopezdp/ServerlessStarterService --name microservice-project
```

Enter the new directory

``` bash
$ cd microservice-project
```

Install the Node.js packages

``` bash
$ npm install
```

### Usage

To run eslint on your local

``` bash
$ npm run lint
```

To run unit tests on your local

``` bash
$ npm run test
```

To run a function on your local

``` bash
$ serverless invoke local --function hello
```

To simulate APIGateway locally using [serverless-offline](https://github.com/dherault/serverless-offline)

``` bash
$ serverless offline start
```

We use Jest to run our tests. You can read more about setting up your tests [here](https://facebook.github.io/jest/docs/en/getting-started.html#content).

Deploy your project

``` bash
$ serverless deploy
```

Deploy a single function

``` bash
$ serverless deploy function --function hello
```

To add another function as a new file to your project, simply add the new file and add the reference to `serverless.yml`. The `webpack.config.js` automatically handles functions in different files.

**To add environment variables to your project**

1. Rename `env.example` to `env.yml`.
2. Add environment variables for the various stages to `env.yml`.
3. Uncomment `environment: ${file(env.yml):${self:provider.stage}}` in the `serverless.yml`.
4. Make sure to not commit your `env.yml`.

### Support

- Send us an [email](mailto:davidplopez@live.com) if you have any questions
- Open a [new issue](https://github.com/lopezdp/ServerlessStarterService/issues/new) if you've found a bug or have some suggestions.
- Or submit a pull request!

### Maintainers

The [Serverless Tutorial Series](https://github.com/lopezdp/TechnicalArticles#technical-articles) is maintained by David Lopez ([@davidplopez](https://instagram.com/davidplopez)). [**Subscribe to our newsletter** (Coming Soon!)](http://www.DavidPLopez.com) for updates. Send us an [email](mailto:davidplopez@slive.com) if you have any questions.
