<?php
    require $_SERVER['DOCUMENT_ROOT'] . '/bootstrap.php';
    $parseDown = new Parsedown();
    $content = getMarkdownContent( '/' . basename(dirname(__FILE__)) );

    require_once ROOT . '/partials/header.php';

    echo $parseDown->text($content);

    $courses = getJsonData('courses.json');
    $projectsJson = getJsonData('projects.json');

    $projects = $projectsJson['allProjects'];
    $optionalProjects = $projectsJson['optionalProjects'];

    foreach($courses as $course):
?>
<div>
    <h3 id="">
        <?php echo $course['course_name']; ?>
    </h3>
    <p>
        <span>
            <?php echo $course['course_description']; ?>
        </span>
    </p>
    <ol>
        <?php foreach($course['projects'] as $projectId): ?>
        <li>
            <a href="https://create.mouse.org/project/<?php $projectId; ?>" target="_blank">
                <?php if (in_array($projectId, $optionalProjects)): ?>
                    <span>
                        *&nbsp;
                    </span>
                <?php endif; ?>
                <?php echo $projects[$projectId]['title']; ?>
            </a>
        </li>
        <?php endforeach; ?>
    </ol>
</div>
<?php
    endforeach;
require_once ROOT . '/partials/footer.php';
