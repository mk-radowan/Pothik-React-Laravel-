<?php $__env->startSection('title', 'Browse Cars'); ?>

<?php $__env->startSection('content'); ?>
    <div id="cars-root" data-cars='<?php echo json_encode($carsData, 15, 512) ?>'></div>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('scripts'); ?>
    <?php echo app('Illuminate\Foundation\Vite')('resources/js/app.js'); ?>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /opt/lampp/htdocs/Pothik_React_Laravel/resources/views/cars/index.blade.php ENDPATH**/ ?>