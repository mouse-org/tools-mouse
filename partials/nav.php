<a id="site-title-link" href="/">
    <h1 id="site-title">
        Mouse Create Help &amp; Tools
    </h1>
</a>
<ul id="nav">
    <?php $navItems = include $_SERVER['DOCUMENT_ROOT'] . '/nav/nav-items.php'; ?>
    <?php foreach($navItems as $item): ?>
    <div>
        <a href="<?php echo $item['url']; ?>">
            <div id="nav-item">
                <li class="menu-item">
                    <?php echo $item['label']; ?>
                </li>
            </div>
        </a>
    </div>
    <?php endforeach; ?>
</ul>
