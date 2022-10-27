<a id="site-title-link" href="/">
    <h1 id="site-title">
        Mouse Create Help &amp; Tools
    </h1>
</a>
<ul id="nav">
    <?php
        $navItems = getJsonData('menu.json');
        foreach($navItems as $item):
    ?>
    <div>
        <a href="<?php echo $item['url']; ?>">
            <div id="nav-item">
                <li class="<?php echo $item['class']; ?>">
                    <?php echo $item['name']; ?>
                </li>
            </div>
        </a>
    </div>
    <?php endforeach; ?>
</ul>
