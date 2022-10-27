<?php

    require $_SERVER['DOCUMENT_ROOT'] . '/bootstrap.php';

    $request = $_SERVER['REQUEST_URI'];

    $parseDown = new Parsedown();
    $content = getMarkdownContent( $request );

    require_once ROOT . '/partials/header.php';

    echo $parseDown->text($content);

    require_once ROOT . '/partials/footer.php';
