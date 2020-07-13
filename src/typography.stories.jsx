import React from 'react';

export default { title: 'Typography' };

export const Reference = () => (
    <div>
        <h2>Headings</h2>

        <p>All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available. <code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font styling of a heading but still want your text to be displayed inline.</p>

        <h1>h1. Bootstrap heading</h1>
        <h2>h2. Bootstrap heading</h2>
        <h3>h3. Bootstrap heading</h3>
        <h4>h4. Bootstrap heading</h4>
        <h5>h5. Bootstrap heading</h5>
        <h6>h6. Bootstrap heading</h6>

        <h2>Headings with secondary text</h2>
        <p>Create lighter, secondary text in any heading with a generic <code>&lt;small&gt;</code> tag or the <code>.small</code> class.</p>
        <div>
            <h1>h1. Bootstrap heading <small>Secondary text</small></h1>
            <h2>h2. Bootstrap heading <small>Secondary text</small></h2>
            <h3>h3. Bootstrap heading <small>Secondary text</small></h3>
            <h4>h4. Bootstrap heading <small>Secondary text</small></h4>
            <h5>h5. Bootstrap heading <small>Secondary text</small></h5>
            <h6>h6. Bootstrap heading <small>Secondary text</small></h6>
        </div>

        <h2>Body</h2>
        <p>
            <p>Bootstrap's global default <code>font-size</code> is <strong>14px</strong>, with a <code>line-height</code> of <strong>1.428</strong>. This is applied to the <code>&lt;body&gt;</code> and all paragraphs. In addition, <code>&lt;p&gt;</code> (paragraphs) receive a bottom margin of half their computed line-height (10px by default).</p>
        </p>

        <h2>Body example</h2>
        <div>
            <p>Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p> <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.</p> <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
        </div>

        <h2>Lead body</h2>
        <p>Make a paragraph stand out by adding <code>.lead</code>.</p>
        <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non
            commodo luctus.</p>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non
            commodo luctus.</p>

        <h2>Inline text elements</h2>
        <h3>Marked text</h3>
        <p>You can use the mark tag to <mark>highlight</mark> text.</p>

        <h3>Deleted text</h3>
        <del>This line of text is meant to be treated as deleted text, use "del" tag</del>

        <h3>Strikethrough text</h3>
        <s>This line of text is meant to be treated as no longer accurate, use "s" tag</s>

        <h3>Inserted text</h3>
        <ins>This line of text is meant to be treated as an addition to the document, use "ins" tag</ins>

        <h3>Underlined text</h3>
        <u>This line of text will render as underlined, use "u" tag</u>

        <h3>Small text</h3>
        <p>For de-emphasizing inline or blocks of text, use the <code>&lt;small&gt;</code> tag to set text at 85% the size of the parent. Heading elements receive their own <code>font-size</code> for nested <code>&lt;small&gt;</code> elements.</p>
        <p>You may alternatively use an inline element with <code>.small</code> in place of any <code>&lt;small&gt;</code>.</p>
        <small>This line of text is meant to be treated as fine print.</small>

        <h3>Bold</h3>
        <strong>rendered as bold text, use "strong" tag</strong>
        <h3>Italics</h3>
        <em>rendered as italicized text, use "em" tag</em>

        <h2>Abbreviations</h2>
        <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>, use "abbr" tag.</p>
        <h3>Initialism</h3>
        <p>Add <code>.initialism</code> to an abbreviation for a slightly smaller font-size.</p>
        <p>Example: <abbr title="HyperText Markup Language" className="initialism">HTML</abbr> is the best thing since sliced
            bread.</p>

        <h3>Addresses</h3>

        <p>Present contact information for the nearest ancestor or the entire body of work. Preserve formatting by ending all lines with <code>&lt;br&gt;</code>.</p>

        <address>
            <strong>Twitter, Inc.</strong><br/>
            1355 Market Street, Suite 900<br/>
            San Francisco, CA 94103<br/>
            <abbr title="Phone">P:</abbr> (123) 456-7890
        </address>

        <address>
            <strong>Full Name</strong><br/>
            <a href="mailto:#">first.last@example.com</a>
        </address>

        <h2>Blockquotes</h2>
        <p>For quoting blocks of content from another source within your document.</p>
        <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        </blockquote>

        <h3>Blockquote options</h3>
        <p>Add a <code>&lt;footer&gt;</code> for identifying the source. Wrap the name of the source work in <code>&lt;cite&gt;</code>.</p>
        <blockquote>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>

        <h3>Alternate displays</h3>
        <p>Add <code>.blockquote-reverse</code> for a blockquote with right-aligned content.</p>
        <blockquote className="blockquote-reverse"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.</p>
            <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </blockquote>

        <h2>Lists</h2>
        <h3>Unordered</h3>
        <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
            </ul></li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
        </ul>
        <h3>Ordered</h3>
        <ol>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit</li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
        </ol>
        <h3>Unstyled</h3>
        <p>Remove the default <code>list-style</code> and left margin on list items (immediate children only). <strong>This only applies to immediate children list items</strong>, meaning you will need to add the class for any nested lists as well.</p>
        <ul className="list-unstyled">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer molestie lorem at massa</li>
            <li>Facilisis in pretium nisl aliquet</li>
            <li>Nulla volutpat aliquam velit <ul>
                <li>Phasellus iaculis neque</li>
                <li>Purus sodales ultricies</li>
                <li>Vestibulum laoreet porttitor sem</li>
                <li>Ac tristique libero volutpat at</li>
            </ul></li>
            <li>Faucibus porta lacus fringilla vel</li>
            <li>Aenean sit amet erat nunc</li>
            <li>Eget porttitor lorem</li>
        </ul>
        <h3>Inline</h3>
        <p>Place all list items on a single line with <code>display: inline-block;</code> and some light padding.</p>
        <ul className="list-inline">
            <li>Lorem ipsum</li>
            <li>Phasellus iaculis</li>
            <li>Nulla volutpat</li>
        </ul>
        <h3>Description</h3>
        <p>A list of terms with their associated descriptions. User DL (definition list) element</p>
        <dl>
            <dt>Description lists</dt>
            <dd>A description list is perfect for defining terms.</dd>
            <dt>Euismod</dt>
            <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
            <dd>Donec id elit non mi porta gravida at eget metus.</dd>
            <dt>Malesuada porta</dt>
            <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
        </dl>
        <h4>Horizontal description</h4>
        <p>Make terms and descriptions in "dl" line up side-by-side. Starts off stacked like default "dl"s, but when the navbar expands, so do these.</p>
        <dl className="dl-horizontal">
            <dt>Description lists</dt>
            <dd>A description list is perfect for defining terms.</dd>
            <dt>Euismod</dt>
            <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
            <dd>Donec id elit non mi porta gravida at eget metus.</dd>
            <dt>Malesuada porta</dt>
            <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
            <dt>Felis euismod semper eget lacinia</dt>
            <dd>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit
                amet risus.
            </dd>
        </dl>
        <div>
            <h4>Auto-truncating</h4>
            <p>Horizontal description lists will truncate terms that are too long to fit in the left column
                with <code>text-overflow</code>. In narrower viewports, they will change to the default stacked layout.
            </p>
        </div>

        <h2>Code</h2>
        <h3>Inline</h3>
        <p>Wrap inline snippets of code with <code>&lt;code&gt;</code>.</p>
        <div>
            For example, <code>&lt;section&gt;</code> should be wrapped as inline.
        </div>

        <h3>User input</h3>
        <p>Use the <code>&lt;kbd&gt;</code> to indicate input that is typically entered via keyboard.</p>
        <div>
            To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br/>
            To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
        </div>

        <h3>Basic block</h3>
        <p>Use <code>&lt;pre&gt;</code> for multiple lines of code. Be sure to escape any angle brackets in the code for proper rendering.</p>
        <div>
            <pre>&lt;p&gt;Sample text here...&lt;/p&gt;</pre>
        </div>

        <h3>Variables</h3>
        <p>For indicating variables use the <code>&lt;var&gt;</code> tag.</p>
        <div>
            <p><var>y</var> = <var>m</var><var>x</var> + <var>b</var></p>
        </div>

        <h3>Sample output</h3>
        <p>For indicating blocks sample output from a program use the <code>&lt;samp&gt;</code> tag.</p>
        <div>
            <p><samp>This text is meant to be treated as sample output from a computer program.</samp></p>
        </div>
    </div>
);

export const SamplePage = () => (
    <div>
        <h1>Didn't melt fairer keepsakes since Fellowship elsewhere.</h1>
        <p>Woodlands payment Osgiliath tightening. Barad-dur follow belly comforts tender tough bell? Many that live deserve death. Some that die deserve life. Outwitted teatime grasp defeated before stones reflection corset seen animals Saruman's call?</p>
        <h2>Tad survive ensnare joy mistake courtesy Bagshot Row.</h2>
        <p>Ligulas step drops both? You shall not pass! Tender respectable success Valar impressive unfriendly bloom scraped? Branch hey-diddle-diddle pony trouble'll sleeping during jump Narsil.</p>
        <h3>North valor overflowing sort Iáve mister kingly money?</h3>
        <p>Curse you and all the halflings! Deserted anytime Lake-town burned caves balls. Smoked lthilien forbids Thrain?</p>
        <ul>
            <li>Adamant.</li>
            <li>Southfarthing!</li>
            <li>Witch-king.</li>
            <li>Precious.</li>
            <li>Gaffer's!</li>
        </ul>
        <ul>
            <li>Excuse tightening yet survives two cover Undómiel city ablaze.</li>
            <li>Keepsakes deeper clouds Buckland position 21 lied bicker fountains ashamed.</li>
            <li>Women rippling cold steps rules Thengel finer.</li>
            <li>Portents close Havens endured irons hundreds handle refused sister?</li>
            <li>Harbor Grubbs fellas riddles afar!</li>
        </ul>
        <h3>Narsil enjoying shattered bigger leaderless retrieve dreamed dwarf.</h3>
        <p>Ravens wonder wanted runs me crawl gaining lots faster! Khazad-dum surprise baby season ranks. I bid you all a very fond farewell.</p>
        <ol>
            <li>Narsil.</li>
            <li>Elros.</li>
            <li>Arwen Evenstar.</li>
            <li>Maggot's?</li>
            <li>Bagginses?</li>
        </ol>
        <ol>
            <li>Concerning Hobbits l golf air fifth bell prolonging camp.</li>
            <li>Grond humble rods nearest mangler.</li>
            <li>Enormity Lórien merry gravy stayed move.</li>
            <li>Diversion almost notion furs between fierce laboring Nazgûl ceaselessly parent.</li>
            <li>Agree ruling um wasteland Bagshot Row expect sleep.</li>
        </ol>
        <h3>Ere answering track forests shards roof!</h3>
        <p>Delay freezes Gollum. Let the Ring-bearer decide. Bagshot Row chokes pole pauses immediately orders taught éored musing three-day? Disease rune repel source fire Goblinses already?</p>
        <table>
            <thead>
            <tr>
                <th></th>
                <th>Dangers</th>
                <th>Playing</th>
                <th>Window</th>
                <th>Meaning</th>
                <th>Pace</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Current</td>
                <td>living</td>
                <td>odds</td>
                <td>charged</td>
                <td>heads</td>
                <td>felt</td>
            </tr>
            <tr>
                <td>Inn</td>
                <td>climbing</td>
                <td>destroying</td>
                <td>overhead</td>
                <td>roll</td>
                <td>mud</td>
            </tr>
            <tr>
                <td>Breath</td>
                <td>relevant</td>
                <td>éored</td>
                <td>hinges</td>
                <td>year</td>
                <td>signed</td>
            </tr>
            <tr>
                <td>Accept</td>
                <td>threads</td>
                <td>name</td>
                <td>fitted</td>
                <td>precious</td>
                <td>attacked</td>
            </tr>
            <tr>
                <td>Chief</td>
                <td>sails</td>
                <td>first-born</td>
                <td>pottery</td>
                <td>lever</td>
                <td>antagonize</td>
            </tr>
            <tr>
                <td>Unoccupied</td>
                <td>victorious</td>
                <td>means</td>
                <td>lovely</td>
                <td>humble</td>
                <td>force</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td>kinsmen</td>
                <td>give</td>
                <td>walking</td>
                <td>thousand</td>
                <td>manners</td>
                <td>burning</td>
            </tr>
            </tfoot>
        </table>
        <h4>Afraid smithy Fellowship debt carven hooks.</h4>
        <p>What about second breakfast? Nags runt near Lindir lock discover level? Andûril breathe waited flatten union.</p>
        <blockquote>
            <p>You shall be the Fellowship of the Ring.</p>
            <footer>—Númenor, <cite>sweeter burned verse</cite></footer>
        </blockquote>
        <h5>Should Shirelings extraordinary spends poison's willing enchantment.</h5>
        <p>I think we should get off the road. Penalty sight splintered Misty Mountain mithril? Unrest lasts rode league bears absence Bracegirdle athletic contract nice parent slowed?</p>
        <pre>Pardon Concerning Hobbits rune goblins? Twitching figure including rightful Thorin's level! Worth tubers threats Hornburg deadliest? Unfold thumping shh wants Homely!</pre>
        <h6>Improve drops absolutely tight deceit potent Treebeard startled!</h6>
        <p>J.R.R. Tolkien 3000 uttered veins <q>roaring winds moaning flaming</q>. Meddle <ins>measure pure</ins> Samwise Gamgee business! <sub>Lied</sub> mistake Proudfoots pon. Instance 80 <dfn>morbid ceremonial plunge</dfn> Anor mad. Questions shells hangs noble Proudfoots <var>throws</var>. <mark>Rampart damage</mark> questions Chubbs 3000 conjurer? Single tempt peasants <strong>Bolg Athelas Mordor Wraiths Azog Undómiel</strong> mangler? <samp>Nori Giants Undómiel Rivendell</samp> spike posts took. Fool's Underhill boarded <cite>vanishing twilight unheard-of</cite>. <abbr>Presence</abbr> Dunland lamb lair. Barricade <sup>didn't</sup> feelings purring vine Morgoth. Distract Giants nearing champion <kbd>T</kbd>. Clothing titles quick bother <em>Arod Gloin Beren</em> troop? Balls crashing bastards <small>arrives precisely rascal</small> stubbornness Snowbourn. Hobbitses rose barren <a>strengths tested mirrors moonlight password</a> center? Remade <x-code>free filthy</x-code> breaking respect amuse Arod? Vengeance <del>Elessar Wolves</del> posts remain doorway said! <time>Suspects</time> fight Merry hungers locked yelp.</p>
        <hr/>
        <dl>
            <dt>Abandon</dt>
            <dd>Tact flies disturber thinking hospitality Elros act vest handy ranks.</dd>
            <dt>Devil</dt>
            <dd>Boneses spilled Caradhras hungry pace lanterns glory haunted shone forging.</dd>
            <dd>Unprotected Beorn's fireworks dream journey beacon dwells gnaws key.</dd>
            <dt>Happened</dt>
            <dd>Known wanna fifth Bill hell knew she scale.</dd>
            <dd>Missing vanish taken colleague sway voice tricks 13 Grimbold.</dd>
            <dd>Thereof skills kingsfoil innocent riding light Thorin Oakenshield won.</dd>
        </dl>
    </div>
);
