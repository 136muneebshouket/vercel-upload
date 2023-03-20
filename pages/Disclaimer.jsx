import React from 'react'
import Head from 'next/head'



function Disclaimer() {

    return (
        <>
         <Head>
    <title>Disclaimer| [Website Name]</title>
    <meta name="description" content="Disclaimer" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
     </Head>
       

            <main>
                
            <div className="disclaimer-container">
                <div className="disclaimer-inner">
                    <ol className="disclaimer-links">
                        <li className="active">
                            <a href="#1">Disclaimer for Edify Group Of Companies</a>
                        </li>
                        <li><a href="#2">Disclaimers for lovepdf</a></li>
                        <li><a href="#3">Consent</a></li>
                        <li><a href="#4">Update</a></li>
                    </ol>
                    <div className="disclaimer-text-box">
                        <div id="1" className="disclaimer-text active">
                            <h1>Disclaimer for Edify Group Of Companies</h1>
                            <p>
                                If you require any more information or have any questions about
                                our site's disclaimer, please feel free to contact us by email
                                at <a href="edifytech4u@gmail.com">edifytech4u@gmail.com</a>. 
                            </p>
                        </div>
                        <div id="2" className="disclaimer-text">
                            <h1>Disclaimers for lovepdf</h1>
                            <p>
                                All the information on this website - lovepdf.io - is published
                                in good faith and for general information purpose only. lovepdf
                                does not make any warranties about the completeness, reliability
                                and accuracy of this information. Any action you take upon the
                                information you find on this website (lovepdf), is strictly at
                                your own risk. lovepdf will not be liable for any losses and/or
                                damages in connection with the use of our website.
                            </p>

                            <p>
                                From our website, you can visit other websites by following
                                hyperlinks to such external sites. While we strive to provide
                                only quality links to useful and ethical websites, we have no
                                control over the content and nature of these sites. These links
                                to other websites do not imply a recommendation for all the
                                content found on these sites. Site owners and content may change
                                without notice and may occur before we have the opportunity to
                                remove a link which may have gone 'bad'.
                            </p>

                            <p>
                                Please be also aware that when you leave our website, other
                                sites may have different privacy policies and terms which are
                                beyond our control. Please be sure to check the Privacy Policies
                                of these sites as well as their "Terms of Service" before
                                engaging in any business or uploading any information.
                            </p>
                        </div>
                        <div id="3" className="disclaimer-text">
                            <h1>Consent</h1>
                            <p>
                                By using our website, you hereby consent to our disclaimer and
                                agree to its terms.
                            </p>
                        </div>
                        <div id="4" className="disclaimer-text">
                            <h1>Update</h1>
                            <p>
                                Should we update, amend or make any changes to this document,
                                those changes will be prominently posted here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </main>
        </>
    )
}

export default Disclaimer