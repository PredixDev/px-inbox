/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*
    Relative paths assume component is being run from inside an app or another component, where dependencies are flat
    siblings. When this component is run from its own repo (e.g. tests, examples), we assume the server is started with
    'gulp serve' (or similar server setup) to enable correct finding of bower dependencies for local runs.
*/
/*
This sub-component is simply an example for demo purposes.
Any content placed between the <px-inbox> and </px-inbox> tags will be rendered as the "detail view"
of the px-inbox list/detail component. You could componentize your detail view with Polymer like
we've done in this file, or you could define your view in plain HTML/JS/CSS or any other library or framework.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import '../css/px-inbox-styles.js';
import 'px-icon-set/px-icon-set-feature.js';
import 'px-icon-set/px-icon.js';
import 'px-key-value-pair/px-key-value-pair.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <style include="px-inbox-styles">
       :host {
        display: flex;
        flex-direction: column;
        height: auto;
      }
      .heading--page,
      .details {
        padding: 2rem;
        border-bottom: 1px solid rgb(216, 224, 229);
        flex: 0 0 auto;
      }
      px-key-value-pair {
        min-width: 10rem;
      }
    </style>

    <div class="heading--page flex flex--left">{{title}}</div>
    <div class="details">
      <span class="heading--section"><px-icon class="u-mr-" icon="px-fea:alerts"></px-icon>Alert Information</span>
      <div class="flex flex--row flex--wrap flex--justify">
        <px-key-value-pair class="u-mv" key="Alert ID" value="{{alertId}}"></px-key-value-pair>
        <px-key-value-pair class="u-mv" key="Alert Source" value="{{alertSource}}"></px-key-value-pair>
        <px-key-value-pair class="u-mv" key="Received Date/Time" value="{{receivedDateTime}}"></px-key-value-pair>
        <px-key-value-pair class="u-mv" key="Case Number" value="{{caseNumber}}"></px-key-value-pair>
      </div>
    </div>
    <div class="details">
      <span class="heading--section"><px-icon class="u-mr-" icon="px-fea:asset"></px-icon>Asset Information</span>
      <div class="flex flex--row flex--wrap flex--justify">
        <px-key-value-pair class="u-mv" key="Customer" value="{{customer}}"></px-key-value-pair>
        <px-key-value-pair class="u-mv" key="Serial Number" value="{{serialNumber}}"></px-key-value-pair>
        <px-key-value-pair class="u-mv" key="DLN Type" value="{{dlnType}}"></px-key-value-pair>
        <px-key-value-pair class="u-mv" key="Model" value="{{model}}"></px-key-value-pair>
      </div>
    </div>
`,

  is: 'px-inbox-detail-demo',

  properties: {
    /*
     * The following properties provide hooks through which we can display detailed information about the selected inbox item
     */
    title: {
      type: String
    },
    severity: {
      type: String
    },
    alertId: {
      type: String
    },
    alertSource: {
      type: String
    },
    receivedDateTime: {
      type: String
    },
    caseNumber: {
      type: String
    },
    customer: {
      type: String
    },
    serialNumber: {
      type: String
    },
    dlnType: {
      type: String
    },
    model: {
      type: String
    }
  }
});
