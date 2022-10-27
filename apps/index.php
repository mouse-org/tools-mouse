<?php
    require $_SERVER['DOCUMENT_ROOT'] . '/bootstrap.php';
    $parseDown = new Parsedown();
    $content = getMarkdownContent( '/' . basename(dirname(__FILE__)) );

    require_once ROOT . '/partials/header.php';
    echo $parseDown->text($content);
    $apps = getJsonData('apps.json');
?>
<div id="apps">
<?php foreach($apps as $app): ?>
    <div class="app-thumb">
        <a href="/apps/<?php echo $app['url']; ?>" target="_blank">
            <img src="<?php echo $app['thumbnail']; ?>">
            <div class="app-name">
                <?php echo $app['name']; ?>
            </div>
        </a>
    </div>
<?php endforeach; ?>
</div>
<?php require_once ROOT . '/partials/footer.php'; ?>
