import {executeJar, install} from "../../node-java-connector";
import * as path from "path";


/**
 * Installts the Java JRE and runs the hello world example.
 */
async function execute(): Promise<void> {
    await install({ feature_version: 11 });

    const relativePath = path.join(
        path.dirname(__dirname),
        'jar/Main.jar'
    );

    executeJar(relativePath).then((result) =>
        result.stdout?.on('data', (data) => {
            console.log(data.toString());
        })
    );
}

execute();