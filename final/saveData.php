<?php
// Preuzmi JSON podatke iz POST zahteva
$data = json_decode(file_get_contents("php://input"), true);

// Proveri da li su podaci uspešno primljeni
if ($data) {
    // Možeš sačuvati podatke u fajl ili bazu
    $file = 'users.json';
    $currentData = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    $currentData[] = $data;
    file_put_contents($file, json_encode($currentData, JSON_PRETTY_PRINT));

    // Vrati odgovor
    echo json_encode(['status' => 'success', 'message' => 'Data saved successfully.']);
} else {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'message' => 'Invalid data.']);
}
