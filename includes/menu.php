<?php 
 $menus = [
        ['a href' => 'index.php', 'label' => 'Acceuil'],
        ['a href' => 'page/recettes.html','label' => 'Recettes'],
        ['a href' => 'page/materiels.html','label' => 'Matériels'],
        ['a href' => 'page/recherche.html','label' => 'Recherche']
    ];
 ?>
<nav>
    <ul class="list-inline">
    <?php foreach ($menus as $menu): ?>
        <li>
            <a href="<?php echo $menu['a href']; ?>">
                <?php echo $menu['label']; ?>
            </a>
        </li>
    <?php endforeach ?>            
    </ul>
</nav>
<?php include 'includes/footer.php'; ?>
