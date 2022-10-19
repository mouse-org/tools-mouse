<?php

require $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';

define('ROOT', $_SERVER['DOCUMENT_ROOT']);
define('MARKDOWN_DIR', ROOT . '/data/md');
define('JSON_DATA_DIR', ROOT . '/data/json');

function getMarkdownContent($filename)
{
    $filename = ($filename === '/') ? '/index' : $filename;

    $markdownFile = MARKDOWN_DIR . $filename . '.md';
    return file_get_contents( $markdownFile );
}

function getJsonData($filename)
{
    $json = file_get_contents(JSON_DATA_DIR . '/' . $filename);
    return json_decode($json, true);
}

function generateSlug($title)
{
    $title = strtolower($title);
    $title = str_replace('& ', '', $title);
    return str_replace(' ', '-', $title);
}
