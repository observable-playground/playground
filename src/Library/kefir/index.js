import React from 'react'
import { PlaygroundWrapper } from '../../Playground/PlaygroundWrapper';
import { Head } from 'react-static'
import basicExample from './basic.example';

export default () =>
<React.Fragment>
    <Head>
        <title>Kefir examples and playground</title>
    </Head>
    <div className="PageBlock">
        <h1>Kefir Playground</h1>

        <blockquote>Kefir — is a Reactive Programming library for JavaScript inspired by Bacon.js and RxJS, with focus on high performance and low memory usage.</blockquote>

        <p>
            To visualize the observables we developed a small API. Provided <code>api/v0.3</code> package has a function <code>kefirObserver(title: string): observer</code>, that you can call to create a <a href="https://kefirjs.github.io/kefir/#observe" target="_blank">kefir observer</a>, which will display its state on the time chart in the right part of the screen.
        </p>
    </div>

    <br />
    <PlaygroundWrapper code={ basicExample } height={ 200 }/>
    <br />

    <div className="PageBlock">
        <div>
            <h2>External links</h2>
            <ul>
                <li><b><a href="https://github.com/kefirjs/kefir" target="_blank">kefirjs/kefir</a></b> — Kefir repo</li>
                <li><b><a href="https://kefirjs.github.io/kefir/" target="_blank">kefirjs.github.io/kefir</a></b> — official docs</li>
 
            </ul>
        </div>
    </div>
</React.Fragment>