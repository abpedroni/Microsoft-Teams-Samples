// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import { useEffect, useState } from 'react';
import * as microsoftTeams from "@microsoft/teams-js";
import { Text, Button } from '@fluentui/react-components'
import { Card, CardPreview, CardHeader, CardFooter } from "@fluentui/react-components/unstable"
import { CardBody } from 'reactstrap';
/**
 * The 'captureVideoDesktop' component
 * of your app.
 */
const CaptureVideoDesktop = () => {
    //  var stream: MediaStream = null;
    const [capturedVideo, setCapturedVideo] = useState(new MediaStream);
    useEffect(() => {
        // initializing microsoft teams sdk
        microsoftTeams.app.initialize()
    })

    function captureVideo() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(mediaStream => {
                const videoElement = document.querySelector("video");
                videoElement!.srcObject = mediaStream;
                setCapturedVideo(mediaStream);
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            {/* Card for showing Video */}
            <Card>
            <Text weight='bold' as="h1">Capture Video (Web only) </Text>                
                <CardBody>
                    <div className='flex columngap'>
                        <Text>Checks for permission to use media input</Text>
                        <Text weight='medium'>SDK used:</Text>
                        <Text>navigator</Text>
                        <Text weight='medium'>Method:</Text>
                        <Text> navigator.mediaDevices.getUserMedia</Text>
                        <Button onClick={captureVideo}>Capture video </Button>
                       
                        <video src="" controls>   </video>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}

export default CaptureVideoDesktop;