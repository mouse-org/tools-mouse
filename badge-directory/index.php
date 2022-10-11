<!doctype html>
<html data-n-head-ssr>
   <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/partials/head.php'; ?>
<body>
    <div data-server-rendered="true" id="__nuxt">
        <div id="__layout">
            <div>
               <section class="container">
                    <div>
                        <div id="menu">
                            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/partials/nav.php'; ?>
                            <div class="alert" style="display: none;"></div>
                        </div>
                        <div>
                            <section>
                               <h1>
                                    Badge Directory
                                </h1>

                                <?php
                                    $badgesJson = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/data/json/badges.json');
                                    $badges = json_decode($badgesJson, true);

                                    $projectsJson = file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/data/json/projects.json');
                                    $projects = json_decode($projectsJson, true)['allProjects'];
                                    foreach($badges as $badge):
                                ?>
                                <div class="mouse-activity well building">
                                    <a href="<?php echo $badge['badge_url']; ?>" target="blank">
                                        <img src="<?php echo $badge['badge_image']; ?>">
                                    </a>
                                    <ul class="project-list">
                                        <?php foreach($badge['projects'] as $projectId): ?>
                                        <li>
                                            <a href="https://create.mouse.org/project/<?php echo $projectId; ?>" target="_blank">
                                                <?php echo $projects[$projectId]['title']; ?>
                                            </a>
                                        </li>
                                        <?php endforeach; ?>
                                    </ul>
                                </div>

                                <?php endforeach; ?>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
    <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/partials/footer.php'; ?>
</body>
</html>
