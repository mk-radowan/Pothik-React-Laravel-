<?php $__env->startSection('title', $carDetailsData['car']['display_name']); ?>

<?php $__env->startSection('content'); ?>
    <div id="car-details-root" data-car='<?php echo json_encode($carDetailsData, 15, 512) ?>'></div>
<?php $__env->stopSection(); ?>

<?php $__env->startPush('scripts'); ?>
    <?php echo app('Illuminate\Foundation\Vite')('resources/js/app.js'); ?>
<?php $__env->stopPush(); ?>

<?php echo $__env->make('layouts.app', array_diff_key(get_defined_vars(), ['__data' => 1, '__path' => 1]))->render(); ?><?php /**PATH /opt/lampp/htdocs/Pothik_React_Laravel/resources/views/cars/show.blade.php ENDPATH**/ ?>