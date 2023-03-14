import {serve} from 'https://deno.land/std@0.179.0/http/server.ts';
import React from 'react';
import {renderToString} from 'react-dom/server';

const SayHello = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.details}</p>
        </div>
    );
}

const handler = async (request) => {
    const html = renderToString(<SayHello title="Hello" details="This is a simple test." />);
    return new Response(html, {
        status: 200,
        headers: {
            "content-type": "text/html"
        }
    })
};

serve(handler);

/*
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Simple Test 1</title>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
</head>
<body>${body}</body>
</html>`;
*/
