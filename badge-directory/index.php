<?php
    require $_SERVER['DOCUMENT_ROOT'] . '/bootstrap.php';
    $parseDown = new Parsedown();
    $content = getMarkdownContent( '/' . basename(dirname(__FILE__)) );

    require_once ROOT . '/partials/header.php';

    echo $parseDown->text($content);

    $badges = getJsonData('badges.json');
    $projectsJson = getJsonData('projects.json');

    $projects = $projectsJson['allProjects'];

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

<?php
    endforeach;
require_once ROOT . '/partials/footer.php';
